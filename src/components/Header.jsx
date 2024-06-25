import React from "react";
import Nav from "./Nav";
import { ReactComponent as Logo } from "../images/icons_assets/logo.svg";
import styles from "./header.module.css";
import appStyles from "../App.module.css";

export default function Header() {
  return (
    <header className={`${styles.header}  ${appStyles.container}  `}>
      <Logo className={styles.logo} />
      <Nav />
    </header>
  );
}
