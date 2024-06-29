import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import { ReactComponent as Logo } from "../../images/icons_assets/logo.svg";
import { ReactComponent as MenuIcon } from "../../images/icons_assets/hamburger-menu.svg";
import { ReactComponent as CloseIcon } from "../../images/icons_assets/close.svg";
import styles from "./header.module.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header}  ${styles.container}  `}>
      <Logo className={styles.logo} />
      <button className={styles.menuButton} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      <Nav
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
    </header>
  );
}
