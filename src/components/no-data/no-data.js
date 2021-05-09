import React from "react";
import "./no-data.css";

function NoData() {
  return (
    <div data-testid="no-data-item-container" className="no-data-item-wrapper">
      <p data-testid="no-data-item" className="no-data-text">
        No valid data found.
      </p>

      <span data-testid="no-data-description" className="no-data-description">
        Default date range is last 30 min. You're observing this message means
        there were no any activity for last 30 min. Refresh page or select any
        specified date range to display data.
      </span>
    </div>
  );
}

export default NoData;
