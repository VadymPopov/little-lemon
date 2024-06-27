import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

const reservation = {
  date: "24-05-2024",
  time: "17:00",
  number: "2",
  occasion: "Birthday",
};

const updateReservation = jest.fn();
const submitForm = jest.fn();
const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const setup = (reservationOverrides = {}) => {
  render(
    <BookingForm
      reservation={{ ...reservation, ...reservationOverrides }}
      updateReservation={updateReservation}
      availableTimes={availableTimes}
      submitForm={submitForm}
    />
  );

  return { reservation };
};

describe("BookingForm", () => {
  it("Renders the BookingForm heading", () => {
    setup();
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
  });

  it("should apply the correct attributes to the date input", () => {
    setup();

    const dateInput = screen.getByLabelText("Choose date");
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute(
      "min",
      new Date().toISOString().split("T")[0]
    );
    expect(dateInput).toHaveAttribute("required");
  });

  it("should apply the correct attributes to the time input", () => {
    setup();

    const timeInput = screen.getByLabelText("Choose time");
    expect(timeInput).toHaveAttribute("required");
  });

  it("should apply the correct attributes to the guests input", () => {
    setup();
    const guestsInput = screen.getByLabelText("Number of guests");
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toHaveAttribute("required");
  });

  it("should apply the correct attributes to the occasion select", () => {
    setup();
    const occassionSelect = screen.getByLabelText("Occasion");
    expect(occassionSelect).toHaveAttribute("required");
  });

  it("should disable the submit button if the form is invalid", () => {
    setup();
    const button = screen.getByLabelText("button", {
      name: /make your reservation/i,
    });
    expect(button).toBeDisabled();
  });

  it("should disable the submit button if the date is invalid", () => {
    setup({ date: "" });
    const button = screen.getByLabelText("button", {
      name: /make your reservation/i,
    });
    expect(button).toBeDisabled();
  });

  it("should disable the submit button if the time is not selected", () => {
    setup({ time: "" });
    const button = screen.getByLabelText("button", {
      name: /make your reservation/i,
    });
    expect(button).toBeDisabled();
  });

  it("should disable the submit button when the number of guests is invalid", () => {
    setup({ number: 0 });

    const submitButton = screen.getByLabelText("button", {
      name: /make your reservation/i,
    });
    expect(submitButton).toBeDisabled();
  });
});
