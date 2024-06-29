import React from "react";
import styles from "./nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav({ isMobileMenuOpen, toggleMobileMenu }) {
  return (
    <nav
      className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileOpen : ""}`}>
      <ul className={styles.list}>
        <li className={styles.item} onClick={toggleMobileMenu}>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className={styles.item} onClick={toggleMobileMenu}>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li className={styles.item} onClick={toggleMobileMenu}>
          <NavLink to='/menu'>Menu</NavLink>
        </li>
        <li className={styles.item} onClick={toggleMobileMenu}>
          <NavLink to='/reservation'>Reservation</NavLink>
        </li>
        <li className={styles.item} onClick={toggleMobileMenu}>
          <NavLink to='/order-online'>Order Online</NavLink>
        </li>
        <li className={styles.item} onClick={toggleMobileMenu}>
          <NavLink to='/login'>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}
