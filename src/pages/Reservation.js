import React, { useState, useReducer } from "react";
import BookingForm from "../components/BookingForm";

export default function Reservation() {
  const [reservation, setReservation] = useState({
    date: new Date().toISOString().split("T")[0],
    time: "17:00",
    number: "1",
    occasion: "Birthday",
  });

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  function updateReservation({ target: { name, value } }) {
    setReservation((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    dispatch({ type: "UPDATE_TIMES", payload: reservation.time });
  }

  function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }

  function updateTimes(state, action) {
    return initializeTimes();
  }
  return (
    <BookingForm
      reservation={reservation}
      updateReservation={updateReservation}
      availableTimes={availableTimes}
    />
  );
}
