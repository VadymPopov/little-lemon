import React from "react";
import styles from "./specials.module.css";
import bruchettaImg from "../../images/bruchetta.jpg";
import greekSaladImg from "../../images/greek-salad.jpg";
import lemonCakeImg from "../../images/lemon-dessert.jpg";
import Card from "./Card";

const cards = [
  {
    img: bruchettaImg,
    name: "Greek Salad",
    price: "$12.99",
    text: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    img: greekSaladImg,
    name: "Bruchetta",
    price: "$5.99",
    text: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    img: lemonCakeImg,
    name: "Lemon Dessert",
    price: "$5.00",
    text: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

export default function CardList() {
  return (
    <ul className={styles.list}>
      {cards.map((card) => {
        return <Card key={card.name} {...card} />;
      })}
    </ul>
  );
}
