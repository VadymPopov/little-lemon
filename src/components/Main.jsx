import React from "react";
import bruchettaImg from "../../public/icons_assets/restauranfood.jpg";
import greekSaladImg from "../../public/icons_assets/greek salad.jpg";
import lemonCakeImg from "../../public/icons_assets/lemon dessert.jpg";

export default function Main() {
  return (
    <main>
      <section>
        <div>
          <h1>Little Lemon</h1>
          <p>Chicago</p>
          <p>
            We are a family owned Mediterranean restaurant, focued on
            traditional recipes served with modern twist.
          </p>
          <button>Reserve a Table</button>
        </div>
        <img src={bruchettaImg} alt='bruchetta on the plate' />
      </section>
      <section>
        <div>
          <h2>This weeks special!</h2>
          <button>Online Menu</button>
        </div>
        <ul>
          <li>
            <img src={greekSaladImg} alt='greek salad' />
            <div>
              <p>Greek Salad</p>
              <span>$12.99</span>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.{" "}
              </p>
              <p>
                Order a delivery <span></span>
              </p>
            </div>
          </li>
          <li>
            <img src={bruchettaImg} alt='bruchetta' />
            <div>
              <p>Bruchetta</p>
              <span>$5.99</span>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.{" "}
              </p>
              <p>
                Order a delivery <span></span>
              </p>
            </div>
          </li>
          <li>
            <img src={lemonCakeImg} alt='lemon cake' />
            <div>
              <p>Lemon Dessert</p>
              <span>$5.00</span>
              <p>
                This comes straight from grandma’s recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <p>
                Order a delivery <span></span>
              </p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
