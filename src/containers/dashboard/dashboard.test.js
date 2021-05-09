import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";

import Dashboard from "./dashboard";
import types from "./action-types";

afterEach(cleanup);

const initialState = {
  loading: true,
  error: false,
  metrics: [],
  charts: [
    { key: "fcp", title: "First Contentful Paint", data: [] },
    { key: "ttfb", title: "Time To First Byte", data: [] },
    { key: "dom_load", title: "DOM Load", data: [] },
    { key: "window_load", title: "Window Load", data: [] },
  ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_DOMAIN_METRICS:
      return {
        ...state,
        loading: true,
        error: false,
        metrics: [],
      };

    case types.GET_DOMAIN_METRICS_SUCCESS:
      console.log(action.data);
      return {
        ...state,
        metrics: action.data.metrics,
        loading: false,
      };

    case types.GET_DOMAIN_METRICS_ERROR:
      return {
        ...state,
        metrics: [],
        loading: false,
        error: true,
      };

    default:
      return state;
  }
}

const combinedReducers = combineReducers({
  dashboard: reducer,
});

function renderWithRedux(Component) {
  return {
    ...render(
      <Provider store={createStore(combinedReducers)}> {Component} </Provider>
    ),
  };
}

describe("<Dashboard/>", () => {
  it("should contain 2 action-buttons", async () => {
    renderWithRedux(<Dashboard />);

    const buttons = screen.getAllByRole("button");

    expect(Object.keys(buttons).length).toBe(2);
  });

  it("should contain 2 date-time-picker inputs", async () => {
    renderWithRedux(<Dashboard />);

    const buttons = screen.getAllByRole("input", { type: "text" });

    expect(Object.keys(buttons).length).toBe(2);
  });
});
