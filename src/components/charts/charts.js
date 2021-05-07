import React from "react";
import './charts.style.css'
import {useSelector} from "react-redux";
import ChartItem from "./components/item";
import {computedMetricsSelector} from "../../containers/dashboard/selector";
import Loading from "../loading";
import Error from "../error";

function Charts() {

    const formattedMetrics = useSelector(computedMetricsSelector)

    const loading = useSelector(state => state.dashboard.loading)
    const error = useSelector(state => state.dashboard.error)

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
                loading ? <Loading/> : error ? <Error/> : renderCharts()
            }
        </div>
    )
};

export default Charts
