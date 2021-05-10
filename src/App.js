import MeasureBrowserPerformance from "measure-browser-performance";
import React from "react";
import { Route } from "react-router-dom";

import Dashboard from "./containers/dashboard";

const PerformanceMetricAnalyser = MeasureBrowserPerformance(
  process.env.REACT_APP_ANALYTICS_ENDPOINT,
  true // set false to disable measurement time in console.
);

PerformanceMetricAnalyser.analyse();

const App = () => (
  <div>
    <Route exact path="/" component={Dashboard} />
  </div>
);

export default App;
