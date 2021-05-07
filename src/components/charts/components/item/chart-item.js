import React, {useEffect, useState} from "react";
import CanvasJSReact from "../../../../canvasjs.react";
import {format} from "date-fns";
import NoData from "../../../no-data";
import './style.css';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
const CanvasJS = CanvasJSReact.CanvasJS;

function ChartItem(props) {

    const {chartType} = props
    const [dataPoints, setDataPoints] = useState([]);

    const [options, setOptions] = useState({
        animationEnabled: true,
        animationDuration: 3000,
        title: {
            text: chartType.key
        },
        axisX: {
            valueFormatString: "HH:mm:ss",
            crosshair: {
                enabled: true,
                label: "Crosshair Label",
                labelFormatter: function (e) {
                    return CanvasJS.formatDate(e.value, "DD/MM/YYYY HH-mm-ss");
                }
            }
        },
        axisY: {
            title: "values in seconds",
            crosshair: {
                enabled: true,
                labelMaxWidth: 80,
                labelFormatter: function (e) {
                    return e.value.toFixed(4);
                }
            }
        },

    })

    useEffect(() => {
        if (chartType) setDataPoints(chartType.data.map(metric => {
            return {
                x: new Date(metric.timestamp * 1000),
                y: metric.value,
                label: format(new Date(metric.timestamp * 1000), 'HH:mm:ss')
            }
        }))
    }, [chartType])


    useEffect(() => {
        if (dataPoints && dataPoints.length >= 1) setOptions(prev => ({
            ...prev, data: [{
                yValueFormatString: "#,###",
                xValueFormatString: "ss",
                type: "spline",
                dataPoints: dataPoints
            }]
        }));
    }, [dataPoints])


    return (
        <div className="item-wrapper">
            {
                chartType && chartType.data.length >= 1 ? <CanvasJSChart options={options}/> : <NoData/>
            }
        </div>

    )


};

export default ChartItem
