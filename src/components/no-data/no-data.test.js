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

  it("should have class", () => {
    const handleClick = () => console.log("handleClick triggered !");

    const { getByTestId } = render(<NoData onClick={handleClick} />);

    const itemWrapper = getByTestId("no-data-item-container");

    expect(itemWrapper).toHaveClass("no-data-item-wrapper");
  });

  it("should have text", () => {
    const handleClick = () => console.log("handleClick triggered !");

    const { getByTestId } = render(<NoData onClick={handleClick} />);

    const noDataContent = getByTestId("no-data-item");

    expect(noDataContent).toHaveTextContent("No valid data found.");
  });

  it("should have description", () => {
    const handleClick = () => console.log("handleClick triggered !");

    const { getByTestId } = render(<NoData onClick={handleClick} />);

    const noDataDescription = getByTestId("no-data-description");

    expect(noDataDescription).toHaveTextContent(
      "Default date range is last 30 min. You're observing this message means there were no any activity for last 30 min. Refresh page to load new data or select any specified date range to display data."
    );
  });
});
