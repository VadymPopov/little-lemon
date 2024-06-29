import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import styles from "./checkout.module.css";
import chef from "../images/chef.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { getFormattedDate } from "../utils";

const Checkout = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();
  const reservation = location.state?.reservation;

  useEffect(() => {
    const isFormValid =
      name.trim() !== "" &&
      phone.trim() !== "" &&
      email.trim() !== "" &&
      validateEmail(email);

    setIsButtonDisabled(!isFormValid);
  }, [name, phone, email]);

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function onSubmit(e) {
    e.preventDefault();
    navigate("/confirmation", {
      state: { reservation, client: { name, phone, email } },
    });
  }
  return (
    <div className={styles.container}>
      <h1>Checkout</h1>
      <img src={chef} alt='restaurant' className={styles.image} />
      <p className={styles.details}>
        Dinner Details:{" "}
        <span className={styles.text}>{`${getFormattedDate(
          reservation.date
        )} at ${reservation.time}`}</span>
      </p>
      <form className={styles.form} onSubmit={onSubmit}>
        <label htmlFor='name' className={styles.label}>
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
          required
        />
        <label htmlFor='phone' className={styles.label}>
          Phone
        </label>
        <input
          type='tel'
          id='phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          name='phone'
          className={styles.input}
          required
        />
        <label htmlFor='email' className={styles.label}>
          Email
        </label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name='email'
          className={styles.input}
          required
        />
        <Button type='submit' disabled={isButtonDisabled}>
          Complete Reservation
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
