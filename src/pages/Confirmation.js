import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import styles from "./confirmation.module.css";
import { useLocation } from "react-router-dom";
import { getFormattedDate } from "../utils";

export default function Confirmation() {
  const navigate = useNavigate();
  const location = useLocation();

  const reservation = location.state?.reservation;
  const client = location.state?.client;

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.confirmation}>
      <main className={styles.main}>
        <h1 className={styles.heading}>Booking Confirmed!</h1>
        <p className={styles.message}>Dear {client.name}</p>
        <p className={styles.message}>
          Thank you for your reservation on{" "}
          {`${getFormattedDate(reservation.date)} at ${reservation.time}`} at
          Little Lemon. We look forward to serving you!
        </p>
        <p className={styles.details}>
          Please check your email for the reservation details and confirmation.
        </p>
        <Button onClick={handleHomeClick}>Back to Home</Button>
      </main>
    </div>
  );
}
