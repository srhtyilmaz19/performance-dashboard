import React, {useEffect, useState} from "react";
import CanvasJSReact from "../../../../canvasjs.react";
import NoData from "../../../no-data";
import './style.css';
import chartOptions from "./constants";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function ChartItem(props) {

    const {chartType} = props

    const [options, setOptions] = useState({})

    useEffect(() => {
        if (chartType)setOptions(chartOptions(chartType))
    }, [chartType])

    return (
        <div className="item-wrapper">
            {
                chartType && chartType.data.length >= 1 ? <CanvasJSChart options={options}/> : <NoData/>
            }
        </div>
    )
};

export default ChartItem
