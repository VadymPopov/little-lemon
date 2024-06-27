import React from "react";
import styles from "./nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/menu'>Menu</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/reservation'>Reservation</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/order-online'>Order Online</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/login'>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}
