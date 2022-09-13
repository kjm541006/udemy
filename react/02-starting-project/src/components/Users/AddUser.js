import React from "react";
import Card from "../UI/Card";

import styles from "./AddUser.module.css";

export default function AddUser(props) {
  const addUserHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">사용자 이름</label>
        <input id="username" type="text" name="username"></input>
        <label htmlFor="age">나이 (만)</label>
        <input id="age" type="number" name="age"></input>
        <button type="submit">사용자 추가</button>
      </form>
    </Card>
  );
}
