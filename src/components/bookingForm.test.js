import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

const reservation = {
  date: "24-05-2024",
  time: "17:00",
  number: "2",
  occasion: "Birthday",
};

const updateReservation = jest.fn();
const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

test("Renders the BookingForm heading", () => {
  render(
    <BookingForm
      reservation={reservation}
      updateReservation={updateReservation}
      availableTimes={availableTimes}
    />
  );
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
