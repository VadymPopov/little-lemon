import React from "react";
import styles from "./specials.module.css";

export default function Card({ img, name, price, text }) {
  return (
    <li className={styles.item}>
      <img src={img} alt={name} className={styles.cardImage} />
      <div className={styles.cardDescription}>
        <p className={styles.cardTitle}>
          {name}
          <span className={styles.cardPrice}>{price}</span>
        </p>

        <p className={styles.text}>{text}</p>
        <p className={styles.order}>Order a delivery </p>
      </div>
    </li>
  );
}
