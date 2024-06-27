import React from "react";
import styles from "./testimonials.module.css";

function Testimonial({ rating, name, review }) {
  return (
    <li className={styles.testimonial}>
      <div className={styles.rating}>Rating: {rating} / 5</div>
      <div className={styles.name}>{name}</div>
      <div className={styles.review}>{review}</div>
    </li>
  );
}

export default Testimonial;
