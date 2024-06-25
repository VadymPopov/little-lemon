import React from "react";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href='#home'>Home</a>
        </li>
        <li className={styles.item}>
          <a href='#about'>About</a>
        </li>
        <li className={styles.item}>
          <a href='#menu'>Menu</a>
        </li>
        <li className={styles.item}>
          <a href='#reservation'>Reservation</a>
        </li>
        <li className={styles.item}>
          <a href='#order-online'>Order Online</a>
        </li>
        <li className={styles.item}>
          <a href='#login'>Login</a>
        </li>
      </ul>
    </nav>
  );
}
