import React from "react";
import styles from "./footer.module.css";
import { ReactComponent as Logo } from "../../images/icons_assets/logo.svg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <Logo />
      </div>
      <nav className={styles.footerNav}>
        <h4>Doormat Navigation</h4>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/menu'>Menu</NavLink>
        <NavLink to='/reservation'>Reservation</NavLink>
        <NavLink to='/order-online'>Order Online</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </nav>
      <div className={styles.footerNav}>
        <h4>Contact</h4>
        <p>1234 Street, Chicago, USA</p>
        <p>+1 (437)555-5555</p>
        <p>littlelemon@restaurant.com</p>
      </div>
    </footer>
  );
}

export default Footer;
