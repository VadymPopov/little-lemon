import React from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./layout.module.css";

export default function Layout() {
  return (
    <div className={styles.app}>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet className={styles.outlet} />
      </Suspense>
      <Footer />
    </div>
  );
}
