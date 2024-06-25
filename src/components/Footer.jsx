import React from "react";
import styles from "./footer.module.css";
import { ReactComponent as Logo } from "../images/icons_assets/logo.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <Logo />
      </div>
      <nav className={styles.footerNav}>
        <h4>Doormat Navigation</h4>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#menu'>Menu</a>
        <a href='#reservation'>Reservation</a>
        <a href='#order'>Order Online</a>
        <a href='#login'>Login</a>
      </nav>
      <div className={styles.footerNav}>
        <h4>Contact</h4>
        <p>Address</p>
        <p>Phone</p>
        <p>Email</p>
      </div>
    </footer>
  );
}

export default Footer;
