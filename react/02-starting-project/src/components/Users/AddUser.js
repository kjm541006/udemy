import React, { useState, Fragment } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
// import Wrapper from "../Helpers/Wrapper";

import styles from "./AddUser.module.css";

export default function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
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
    console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

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
            onChange={usernameChangeHandler}
            value={enteredUsername}
          ></input>
          <label htmlFor="age">나이 (만)</label>
          <input
            id="age"
            type="number"
            name="age"
            onChange={ageChangeHandler}
            value={enteredAge}
          ></input>
          <Button type="submit">사용자 추가</Button>
        </form>
      </Card>
    </Fragment>
  );
}
