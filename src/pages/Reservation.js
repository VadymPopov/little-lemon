import React, { useState, useReducer, useEffect } from "react";
import BookingForm from "../components/Booking";
import { fetchAPI, submitAPI } from "../utils";
import { useNavigate } from "react-router-dom";

export function initializeTimes() {
  return fetchAPI(new Date());
}
export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(new Date(action.payload));
    default:
      return state;
  }
}

export default function Reservation() {
  const [reservation, setReservation] = useState({
    date: new Date().toISOString().split("T")[0],
    time: "17:00",
    number: "1",
    occasion: "Birthday",
  });

  const navigate = useNavigate();

  function submitForm(e) {
    e.preventDefault();
    console.log(reservation);
    const success = submitAPI(reservation);
    if (success) {
      navigate("/checkout", { state: { reservation } });
    } else {
      alert("Failed to submit reservation.");
    }
  }

  useEffect(() => {
    initializeTimes();
  }, []);

  useEffect(() => {
    dispatch({ type: "UPDATE_TIMES", payload: reservation.date });
  }, [reservation.date]);

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  function updateReservation({ target: { name, value } }) {
    setReservation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <BookingForm
      reservation={reservation}
      updateReservation={updateReservation}
      availableTimes={availableTimes}
      submitForm={submitForm}
    />
  );
}
