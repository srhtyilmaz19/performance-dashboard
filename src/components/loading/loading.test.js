import React from "react";

import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Loading from "./Loading";

afterEach(cleanup);

describe("<Loading />", () => {
  it("should render Loading component", function () {
    const { asFragment } = render(<Loading />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should have class", function () {
    const { getByTestId } = render(<Loading />);

    const loadingWrapper = getByTestId("loading-wrapper");
    const loadingInner = getByTestId("loading-inner");

    expect(loadingWrapper).toHaveClass("loading-wrapper");
    expect(loadingInner).toHaveClass("lds-dual-ring");
  });

  it("should text class", function () {
    const { getByTestId } = render(<Loading />);

    const button = getByTestId("loading-text");

    expect(button).toHaveTextContent("Loading.");
  });
});
