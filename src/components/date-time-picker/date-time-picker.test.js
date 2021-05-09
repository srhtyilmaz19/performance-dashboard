import React from "react";

import {
  cleanup,
  render,
  waitFor,
  queryByAttribute,
  screen,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DateTimePickers from "./date-time-picker";

afterEach(cleanup);

describe("<DateTimePickers />", () => {
  const nowDate = new Date(2018, 11, 24, 10, 57, 30, 0);
  const nowDateMinus30 = new Date(2018, 11, 24, 10, 27, 30, 0);

  const mockOnClick = jest.fn();

  const mockDateRange = {
    start_date: nowDateMinus30,
    end_date: nowDate,
  };

  it("should render date-time-pickers", async () => {
    const { asFragment } = render(
      <DateTimePickers dateRange={mockDateRange} onChange={mockOnClick} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should contain date-time-pickers", async () => {
    const getById = queryByAttribute.bind(null, "id");

    const { getByTestId } = render(
      <DateTimePickers dateRange={mockDateRange} onChange={mockOnClick} />
    );

    await waitFor(() => {
      const startDateTimePicker = getByTestId("start_date");
      const endDateTimePicker = getByTestId("end_date");

      expect(startDateTimePicker).toBeInTheDocument();
      expect(endDateTimePicker).toBeInTheDocument();
    });
  });

  it("should match with default values", () => {
    const { getByTestId } = render(
      <DateTimePickers dateRange={mockDateRange} onChange={mockOnClick} />
    );

    const startDateTimePicker = getByTestId("start_date");
    const endDateTimePicker = getByTestId("end_date");

    expect(startDateTimePicker.value).toBe("2018/12/24 10:27");
    expect(endDateTimePicker.value).toBe("2018/12/24 10:57");
  });

  it("should show date-time modal on click start date input", async () => {
    const { getByTestId } = render(
      <DateTimePickers dateRange={mockDateRange} onChange={mockOnClick} />
    );

    const startDateInput = getByTestId("start_date");

    fireEvent.click(startDateInput);

    const dialog = await waitFor(() =>
      screen.getAllByRole("dialog", {
        className: "MuiDialog-root",
      })
    );

    expect(dialog[0]).toBeInTheDocument();
  });
});
