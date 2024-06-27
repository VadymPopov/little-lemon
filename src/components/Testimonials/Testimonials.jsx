import React from "react";
import TestimonialsList from "./TestimonialsList";
import styles from "./testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Testimonials</h1>
        <TestimonialsList />
      </div>
    </section>
  );
}
