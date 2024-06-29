import React from "react";
import styles from "./nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav({ isMobileMenuOpen, toggleMobileMenu }) {
  const onNavigationClick = () => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }

    return;
  };

  return (
    <nav
      className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileOpen : ""}`}>
      <ul className={styles.list}>
        <li className={styles.item} onClick={onNavigationClick}>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className={styles.item} onClick={onNavigationClick}>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li className={styles.item} onClick={onNavigationClick}>
          <NavLink to='/'>Menu</NavLink>
        </li>
        <li className={styles.item} onClick={onNavigationClick}>
          <NavLink to='/reservation'>Reservation</NavLink>
        </li>
        <li className={styles.item} onClick={onNavigationClick}>
          <NavLink to='/'>Order Online</NavLink>
        </li>
        <li className={styles.item} onClick={onNavigationClick}>
          <NavLink to='/'>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}
