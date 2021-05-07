import React, {useEffect, useState} from "react";
import CanvasJSReact from "../../../../canvasjs.react";
import NoData from "../../../no-data";
import './style.css';
import chartOptions from "./constants";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function ChartItem(props) {

    const {metrics} = props

    const [options, setOptions] = useState({})

    useEffect(() => {
        if (metrics) setOptions(chartOptions(metrics))
    }, [metrics])

    return (
        <div className="item-wrapper">
            <CanvasJSChart options={options}/>
        </div>
    )
};

export default ChartItem
