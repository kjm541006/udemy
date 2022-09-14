import React, { Fragment } from "react";

import Card from "./Card";
import Button from "./Button";

import styles from "./ErrorModal.module.css";

export default function ErrorModal(props) {
  return (
    <Fragment>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <main className={styles.content}>
          <p>{props.message}</p>
        </main>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>확인</Button>
        </footer>
      </Card>
    </Fragment>
  );
}
