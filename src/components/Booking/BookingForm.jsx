import React, { useState, useEffect, useRef } from "react";
import styles from "./bookingForm.module.css";
import restaurant from "../../images/restaurant.jpg";
import Button from "../Button";

export default function BookingForm({
  reservation,
  updateReservation,
  availableTimes,
  submitForm,
}) {
  const { date, time, number, occasion } = reservation;

  const [isFormValid, setIsFormValid] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
      setIsFormValid(formRef.current.checkValidity());
    }
  }, [date, time, number, occasion]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Book Now</h1>
      <img src={restaurant} alt='restaurant' className={styles.image} />
      <p className={styles.text}>
        Pick the most suitable time, date and party size for your reservation.
        We glad to have you tonight!
      </p>
      <form ref={formRef} className={styles.form}>
        <label className={styles.label} htmlFor='res-date'>
          Choose date
        </label>
        <input
          className={styles.input}
          type='date'
          name='date'
          min={new Date().toISOString().split("T")[0]}
          id='res-date'
          value={date}
          onChange={updateReservation}
          required
        />
        <label className={styles.label} htmlFor='res-time'>
          Choose time
        </label>
        <select
          id='res-time'
          name='time'
          className={styles.input}
          value={time}
          onChange={updateReservation}
          required>
          {availableTimes.map((time) => {
            return <option key={time}>{time}</option>;
          })}
        </select>
        <label className={styles.label} htmlFor='guests'>
          Number of guests
        </label>
        <input
          className={styles.input}
          type='number'
          placeholder='1'
          min='1'
          max='10'
          id='guests'
          name='number'
          value={number}
          onChange={updateReservation}
          required
        />
        <label className={styles.label} htmlFor='occasion'>
          Occasion
        </label>
        <select
          className={styles.input}
          id='occasion'
          value={occasion}
          onChange={updateReservation}
          required
          name='occasion'>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <Button
          type='button'
          disabled={!isFormValid}
          onClick={submitForm}
          aria-label='button'>
          Make Your reservation
        </Button>
      </form>
    </div>
  );
}
