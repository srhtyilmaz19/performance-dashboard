import React from "react";
import PropTypes from "prop-types";
import "./action-buttons.css";

function ActionButtons({ onClick }) {
  return (
    <>
      <button
        type="button"
        data-testid="filter-button"
        className="button"
        onClick={() => onClick("filter")}
      >
        FILTER
      </button>
      <button
        type="button"
        data-testid="reset-button"
        className="button"
        onClick={() => onClick("reset")}
      >
        RESET
      </button>
    </>
  );
}

ActionButtons.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ActionButtons;
