import React from "react";
import './charts.style.css'
import {useSelector} from "react-redux";
import ChartItem from "./components/item";
import {computedMetricsSelector} from "../../containers/dashboard/selector";

function Charts() {

    const formattedMetrics = useSelector(computedMetricsSelector)

    const renderCharts = () => {
        return Object.keys(formattedMetrics).map((key) => {
            return (
                <div className="chart" key={key}>
                    <ChartItem chartType={formattedMetrics[key]}/>
                </div>
            );
        });
    };

    return (
        <div className="chart-wrapper">
            {
                renderCharts()
            }
        </div>
    )
};

export default Charts
