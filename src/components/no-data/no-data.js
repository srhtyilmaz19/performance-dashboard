import React from "react";
import "./no-data.css";

function NoData() {
  return (
    <div data-testid="no-data-item-wrapper" className="item-wrapper">
      <p data-testid="no-data-item" className="no-data-text">
        No valid data found.
      </p>
    </div>
  );
}

export default NoData;
