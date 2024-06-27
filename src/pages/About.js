import React from "react";
import styles from "./about.module.css";
import layout from "../components/Layout/layout.module.css";
import founders from "../images/mario-adrian-b.jpg";

function About() {
  return (
    <main className={`${styles.main} ${layout.container}`}>
      <h2 className={styles.title}>About</h2>
      <h3>Our Founders</h3>
      <div className={styles.description}>
        <div className={styles.founders}>
          <div className={styles.founder}>
            <img
              src={founders}
              alt='Founders having good time at the restaurant '
              className={styles.image}
            />
            <p>Mario and Andrian "The Founders"</p>
          </div>
        </div>
        <p className={styles.text}>
          Little Lemon is a family-owned Mediterranean restaurant located in the
          heart of Chicago. We are dedicated to bringing traditional recipes to
          life with a modern twist. Our culinary philosophy is simple: use the
          freshest, locally-sourced ingredients, cook with passion, and serve
          with love. Our menu features a diverse range of dishes that celebrate
          the rich flavors and vibrant ingredients of the Mediterranean region.
          From our savory kebabs and aromatic rice dishes to our fresh salads
          and delectable desserts, each dish is crafted to provide an
          unforgettable dining experience. At Little Lemon, we believe in the
          power of food to bring people together. Our cozy and inviting
          atmosphere is perfect for family gatherings, romantic dinners, and
          celebrations of all kinds. We pride ourselves on providing excellent
          service and creating a warm, welcoming environment for all our guests.
        </p>
      </div>

      <div className={styles.history}>
        <h3>Our History</h3>
        <p>
          Established in 2020, Little Lemon started as a small family venture
          and has grown into a beloved neighborhood spot. We pride ourselves on
          our authentic flavors and friendly atmosphere.
        </p>
      </div>
    </main>
  );
}

export default About;
