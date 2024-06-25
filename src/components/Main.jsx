import React from "react";
import bruchettaImg from "../images/restauranfood.jpg";
import greekSaladImg from "../images/greek salad.jpg";
import lemonCakeImg from "../images/lemon dessert.jpg";
// import { ReactComponent as Delivery } from "../images/icons_assets/eye.svg";
import styles from "./main.module.css";
import appStyles from "../App.module.css";

export default function Main() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={appStyles.container}>
          <div className={styles.description}>
            <h1 className={styles.title}>Little Lemon</h1>
            <p className={styles.subtitle}>Chicago</p>
            <p className={styles.text}>
              We are a family owned Mediterranean restaurant, focued on
              traditional recipes served with modern twist.
            </p>
            <button className={appStyles.button}>Reserve a Table</button>
          </div>
          <img
            src={bruchettaImg}
            alt='bruchetta on the plate'
            className={styles.image}
          />
        </div>
      </section>
      <section className={styles.specials}>
        <div className={styles.container}>
          <h2 className={styles.titleTwo}>This weeks special!</h2>
          <button className={appStyles.button}>Online Menu</button>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <img
              src={greekSaladImg}
              alt='greek salad'
              className={styles.cardImage}
            />
            <div className={styles.cardDescription}>
              <p className={styles.cardTitle}>
                Greek Salad <span className={styles.cardPrice}>$12.99</span>
              </p>

              <p className={styles.text}>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <p className={styles.order}>Order a delivery </p>
            </div>
          </li>
          <li className={styles.item}>
            <img
              src={bruchettaImg}
              alt='bruchetta'
              className={styles.cardImage}
            />
            <div className={styles.cardDescription}>
              <p className={styles.cardTitle}>
                Bruchetta <span className={styles.cardPrice}>$5.99</span>
              </p>

              <p className={styles.text}>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.{" "}
              </p>
              <p className={styles.order}>Order a delivery</p>
            </div>
          </li>
          <li className={styles.item}>
            <img
              src={lemonCakeImg}
              alt='lemon cake'
              className={styles.cardImage}
            />
            <div className={styles.cardDescription}>
              <p className={styles.cardTitle}>
                Lemon Dessert <span className={styles.cardPrice}>$5.00</span>
              </p>

              <p>
                This comes straight from grandma’s recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <p className={styles.order}>Order a delivery</p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
