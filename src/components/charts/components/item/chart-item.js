import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import CanvasJSReact from "../../../../canvasjs.react";
import chartOptions from "./constants";
import NoData from "../../../no-data";

import "./chart-item.css";

const { CanvasJSChart } = CanvasJSReact;

function ChartItem(props) {
  const { metrics } = props;
  const [options, setOptions] = useState({});

  useEffect(() => {
    if (metrics) setOptions(chartOptions(metrics));
  }, [metrics]);

  if (!metrics.data || metrics.data.length <= 0) {
    return <NoData type={metrics.title} />;
  }

  return (
    <div className="chart-item">
      <CanvasJSChart options={options} />
    </div>
  );
}

ChartItem.propTypes = {
  metrics: PropTypes.object.isRequired,
};

export default ChartItem;
