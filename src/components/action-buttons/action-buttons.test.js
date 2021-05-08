import React from "react";

import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ActionButtons from "./action-buttons";

afterEach(cleanup);

describe("<ActionButtons />", () => {
  it("should render action-buttons", function () {
    const handleClick = () => console.log("handleClick triggered !");
    const { asFragment } = render(<ActionButtons onClick={handleClick} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("filter button should have class and text", function () {
    const handleClick = () => console.log("handleClick triggered !");

    const { getByTestId } = render(<ActionButtons onClick={handleClick} />);

    const button = getByTestId("filter-button");

    expect(button).toHaveClass("button");
    expect(button).toHaveTextContent("FILTER");
  });

  it("reset button should have class and text", function () {
    const handleClick = () => console.log("handleClick triggered !");

    const { getByTestId } = render(<ActionButtons onClick={handleClick} />);

    const button = getByTestId("reset-button");

    expect(button).toHaveClass("button");
    expect(button).toHaveTextContent("RESET");
  });
});
