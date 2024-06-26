import React from "react";
// import { ReactComponent as Delivery } from "../images/icons_assets/eye.svg";
import styles from "./main.module.css";
import Button from "./Button";
import CardList from "./CardList";
import Hero from "./Hero";

export default function Main() {
  return (
    <main>
      <Hero />
      <section className={styles.specials}>
        <div className={styles.container}>
          <h2 className={styles.titleTwo}>This weeks special!</h2>
          <Button>Online Menu</Button>
        </div>
        <CardList />
      </section>
    </main>
  );
}
