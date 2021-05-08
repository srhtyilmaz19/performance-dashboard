import React from "react";
import './loading.css'

const Loading = () => {
    return (
        <div data-testid='loading-wrapper' className="loading-wrapper">
            <div data-testid='loading-inner' className="lds-dual-ring"/>
            <span data-testid='loading-text'>
                Loading.
            </span>
        </div>
    )
}

export default Loading
