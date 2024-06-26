import React from "react";
import styles from "./main.module.css";
import appStyles from "../App.module.css";
import Button from "./Button";
import bruchettaImg from "../images/restauranfood.jpg";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={appStyles.container}>
        <div className={styles.description}>
          <h1 className={styles.title}>Little Lemon</h1>
          <p className={styles.subtitle}>Chicago</p>
          <p className={styles.text}>
            We are a family owned Mediterranean restaurant, focued on
            traditional recipes served with modern twist.
          </p>
          <Button>Reserve a Table</Button>
        </div>
        <img
          src={bruchettaImg}
          alt='bruchetta on the plate'
          className={styles.image}
        />
      </div>
    </section>
  );
}
