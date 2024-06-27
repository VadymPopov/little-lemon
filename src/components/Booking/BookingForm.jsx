import React, { useState, useEffect, useRef } from "react";

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
    <form ref={formRef}>
      <h1>Book Now</h1>
      <label htmlFor='res-date'>Choose date</label>
      <input
        type='date'
        name='date'
        min={new Date().toISOString().split("T")[0]}
        id='res-date'
        value={date}
        onChange={updateReservation}
        required
      />
      <label htmlFor='res-time'>Choose time</label>
      <select
        id='res-time'
        name='time'
        value={time}
        onChange={updateReservation}
        required>
        {availableTimes.map((time) => {
          return <option key={time}>{time}</option>;
        })}
      </select>
      <label htmlFor='guests'>Number of guests</label>
      <input
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
      <label htmlFor='occasion'>Occasion</label>
      <select
        id='occasion'
        value={occasion}
        onChange={updateReservation}
        required
        name='occasion'>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <button
        type='button'
        disabled={!isFormValid}
        onClick={submitForm}
        aria-label='button'>
        Make Your reservation
      </button>
    </form>
  );
}
