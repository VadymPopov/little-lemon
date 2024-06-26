import { initializeTimes, updateTimes } from "./Reservation";
import { fetchAPI } from "../utils";

jest.mock("../utils");

describe("initializeTimes", () => {
  it("should return the correct initial times", () => {
    const mockTimes = ["17:00", "18:00", "19:00"];
    fetchAPI.mockReturnValue(mockTimes);
    const times = initializeTimes();
    expect(times).toEqual(mockTimes);
  });
});

describe("updateTimes", () => {
  it("should return the same initial times for any action", () => {
    const mockTimes = ["17:00", "18:00", "19:00"];
    const date = "2023-01-01";
    fetchAPI.mockReturnValue(mockTimes);

    const action = { type: "UPDATE_TIMES", payload: date };
    const times = updateTimes([], action);
    expect(times).toEqual(mockTimes);
  });
});
