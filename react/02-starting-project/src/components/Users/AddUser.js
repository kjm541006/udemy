import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";

export default function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    console.log(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
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
  );
}
