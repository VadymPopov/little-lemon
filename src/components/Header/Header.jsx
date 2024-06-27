import React from "react";
import Nav from "../Nav/Nav";
import { ReactComponent as Logo } from "../../images/icons_assets/logo.svg";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={`${styles.header}  ${styles.container}  `}>
      <Logo className={styles.logo} />
      <Nav />
    </header>
  );
}
