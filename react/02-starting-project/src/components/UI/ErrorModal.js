import React from "react";

import Card from "./Card";
import Button from "./Button";

import styles from "./ErrorModal.module.css";

export default function ErrorModal(props) {
  return (
    <div>
      <div className={styles.backdrop} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <main className={styles.content}>
          <p>{props.message}</p>
        </main>
        <footer className={styles.actions}>
          <Button>확인</Button>
        </footer>
      </Card>
    </div>
  );
}
