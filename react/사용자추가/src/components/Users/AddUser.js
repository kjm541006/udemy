import React, { useState, Fragment, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
// import Wrapper from "../Helpers/Wrapper";

import styles from "./AddUser.module.css";

export default function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredAge.trim().length === 0 || enteredName.trim().length === 0) {
      setError({
        title: "유효하지 않은 입력값입니다",
        message: "사용자 이름과 나이를 정확히 입력해주세요.",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "유효하지 않은 나이입니다",
        message: "나이는 1부터 입력 가능합니다.",
      });
      return;
    }
    console.log(enteredName, enteredAge);
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setEnteredUsername("");
    // setEnteredUserAge("");
  };

  // const usernameChangeHandler = (e) => {
  //   setEnteredUsername(e.target.value);
  // };

  // const ageChangeHandler = (e) => {
  //   setEnteredUserAge(e.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">사용자 이름</label>
          <input
            id="username"
            type="text"
            name="username"
            // onChange={usernameChangeHandler}
            // value={enteredUsername}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">나이 (만)</label>
          <input
            id="age"
            type="number"
            name="age"
            // onChange={ageChangeHandler}
            // value={enteredUserAge}
            ref={ageInputRef}
          ></input>
          <Button type="submit">사용자 추가</Button>
        </form>
      </Card>
    </Fragment>
  );
}
