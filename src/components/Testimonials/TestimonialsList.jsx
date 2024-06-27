import React from "react";
import Testimonial from "./Testimonial";
import styles from "./testimonials.module.css";

const testimonialsData = [
  {
    rating: 5,
    name: "John Doe",
    review:
      "Amazing food and great atmosphere! Highly recommend the lamb kebabs.",
  },
  {
    rating: 4,
    name: "Jane Smith",
    review:
      "Lovely place with delicious Mediterranean dishes. Will come back for sure.",
  },
  {
    rating: 5,
    name: "Sam Wilson",
    review:
      "Best dining experience I've had in a long time. The staff is very friendly.",
  },
  {
    rating: 5,
    name: "Cassandra Black",
    review: "Absolutely love it! So far the best restaurant in Chicago",
  },
];

export default function TestimonialsList() {
  return (
    <ul className={styles.list}>
      {testimonialsData.map((testimonial, index) => (
        <Testimonial
          key={index}
          rating={testimonial.rating}
          name={testimonial.name}
          review={testimonial.review}
        />
      ))}
    </ul>
  );
}
