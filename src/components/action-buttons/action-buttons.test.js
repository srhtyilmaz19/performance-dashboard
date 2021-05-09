import React from "react";

import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ActionButtons from "./action-buttons";

afterEach(cleanup);

describe("<ActionButtons />", () => {
  const mockOnClick = jest.fn();

  it("should render action-buttons", function () {
    const { asFragment } = render(<ActionButtons onClick={mockOnClick} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("filter button should have class and text", function () {
    const { getByTestId } = render(<ActionButtons onClick={mockOnClick} />);

    const button = getByTestId("filter-button");

    expect(button).toHaveClass("button");
    expect(button).toHaveTextContent("FILTER");
  });

  it("reset button should have class and text", function () {
    const { getByTestId } = render(<ActionButtons onClick={mockOnClick} />);

    const button = getByTestId("reset-button");

    expect(button).toHaveClass("button");
    expect(button).toHaveTextContent("RESET");
  });
});
