import React from "react";

import {
  cleanup,
  render,
  waitFor,
  queryByAttribute,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DateTimePickers from "./date-time-picker";

afterEach(cleanup);

describe("<DateTimePickers />", () => {
  const nowDate = () => "2020/05/09 02:37";
  const nowDateMinus30 = () => "2020/05/09 02:07";

  const mockOnClick = jest.fn();

  const mockDateRange = {
    start_date: nowDateMinus30(),
    end_date: nowDate(),
  };

  it("should render date-time-pickers", async () => {
    const { asFragment } = render(
      <DateTimePickers dateRange={mockDateRange} onChange={mockOnClick} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should contain date-time-pickers", async () => {
    const getById = queryByAttribute.bind(null, "id");

    const dom = render(
      <DateTimePickers dateRange={mockDateRange} onChange={mockOnClick} />
    );

    await waitFor(() => {
      const startDateTimePicker = getById(dom.container, "start_date");
      const endDateTimePicker = getById(dom.container, "end_date");

      expect(startDateTimePicker).toBeInTheDocument();
      expect(endDateTimePicker).toBeInTheDocument();
    });
  });

  it("should match with default values", async () => {
    const getById = queryByAttribute.bind(null, "id");

    const dom = render(
      <DateTimePickers dateRange={mockDateRange} onChange={mockOnClick} />
    );

    const startDateTimePicker = getById(dom.container, "start_date");
    const endDateTimePicker = getById(dom.container, "end_date");

    await waitFor(() => {
      expect(startDateTimePicker.value).toBe("2020/05/09 02:07");
      expect(endDateTimePicker.value).toBe("2020/05/09 02:37");
    });
  });

  it("should match with updated values", async () => {
    const getById = queryByAttribute.bind(null, "id");

    const dom = render(
      <DateTimePickers dateRange={mockDateRange} onChange={mockOnClick} />
    );

    const startDateTimePicker = getById(dom.container, "start_date");
    const endDateTimePicker = getById(dom.container, "end_date");

    startDateTimePicker.value = "2020/05/09 12:37";
    endDateTimePicker.value = "2020/05/09 11:37";

    await waitFor(() => {
      expect(startDateTimePicker).toHaveValue("2020/05/09 12:37");
      expect(endDateTimePicker).toHaveValue("2020/05/09 11:37");
    });
  });
});
