import React from "react";
import './charts.style.css'
import {useSelector} from "react-redux";
import ChartItem from "./components/item";
import {computedMetricsSelector} from "../../containers/dashboard/selector";

function Charts() {

    const formattedMetrics = useSelector(computedMetricsSelector)

    const renderCharts = () => {
        return formattedMetrics.map((item) => {
            return (
                <div className="chart" key={item.key}>
                    <ChartItem chartType={item}/>
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
