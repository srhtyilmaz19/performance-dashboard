import React from "react";

import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChartItem from "./chart-item";

afterEach(cleanup);

describe("<ChartItem />", () => {
  it("should render error component", function () {
    const { asFragment } = render(<ChartItem metrics={{}} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
