import React from "react";

import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NoData from "./no-data";

afterEach(cleanup);

describe("<NoData />", () => {
  it("should render error component", function () {
    const { asFragment } = render(<NoData />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should have class", function () {
    const handleClick = () => console.log("handleClick triggered !");

    const { getByTestId } = render(<NoData onClick={handleClick} />);

    const button = getByTestId("no-data-item-wrapper");

    expect(button).toHaveClass("item-wrapper");
  });

  it("should text class", function () {
    const handleClick = () => console.log("handleClick triggered !");

    const { getByTestId } = render(<NoData onClick={handleClick} />);

    const button = getByTestId("no-data-item");

    expect(button).toHaveTextContent("No valid data found.");
  });
});
