import React from "react";
import './no-data.css'
import PropTypes from "prop-types";

function NoData(props) {

    const {type} = props


    return (
        <div data-testid='no-data-item-wrapper' className="item-wrapper">
            <p className='no-data-text'>No valid data for {type}</p>
        </div>
    )

}

NoData.propTypes = {
    type: PropTypes.string.isRequired,
};

export default NoData
