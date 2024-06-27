import React from "react";
import Button from "../Button";
import CardList from "./CardList";
import styles from "./specials.module.css";

export default function Specials() {
  return (
    <section className={styles.specials}>
      <div className={styles.container}>
        <h2 className={styles.titleTwo}>This weeks specials!</h2>
        <Button>Online Menu</Button>
      </div>
      <CardList />
    </section>
  );
}
