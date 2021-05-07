import React from "react";
import PropTypes from "prop-types";
import './action-buttons.css'

function ActionButtons({onClick}) {

    return (
        <>
            <button className="button" onClick={()=>onClick('filter')}>FILTER</button>
            <button className="button" onClick={()=>onClick('reset')}>RESET</button>
        </>
    )

}

ActionButtons.propTypes = {
    onClick: PropTypes.func.isRequired,
};


export default ActionButtons
