import React from "react";
import { Grid } from "@material-ui/core";

import { useSelector } from "react-redux";
import ChartItem from "./components/item";
import { computedMetricsSelector } from "../../containers/dashboard/selector";
import Loading from "../loading";
import Error from "../error";
import "./charts.css";

function Charts() {
  const formattedMetrics = useSelector(computedMetricsSelector);
  const loading = useSelector((state) => state.dashboard.loading);
  const error = useSelector((state) => state.dashboard.error);

  const renderCharts = () =>
    formattedMetrics.map((item) => (
      <Grid item sm={12} md={6} key={item.key}>
        <ChartItem metrics={item} />
      </Grid>
    ));

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Grid container spacing={2}>
      {renderCharts()}
    </Grid>
  );
}

export default Charts;
