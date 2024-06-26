import React from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import styles from "../App.module.css";

export default function Layout() {
  return (
    <div className={styles.app}>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}
