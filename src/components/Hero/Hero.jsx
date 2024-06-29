import React from "react";
import styles from "./hero.module.css";
import layout from "../Layout/layout.module.css";
import Button from "../Button/Button";
import founders from "../../images/mario-adrian-a.jpg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigation = useNavigate();
  return (
    <section className={styles.hero}>
      <div className={layout.heroContainer}>
        <div className={styles.description}>
          <h1 className={styles.title}>Little Lemon</h1>
          <p className={styles.subtitle}>Chicago</p>
          <p className={styles.text}>
            We are a family owned Mediterranean restaurant, focued on
            traditional recipes served with modern twist.
          </p>
          <Button onClick={() => navigation("/reservation")}>
            Reserve a Table
          </Button>
        </div>
        <img
          src={founders}
          alt='founders in the kitchen'
          className={styles.image}
        />
      </div>
    </section>
  );
}
