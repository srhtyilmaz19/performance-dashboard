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

    const renderCharts = () => (
        formattedMetrics.map(item => (
                <div className="chart" key={item.key}>
                    <ChartItem metrics={item}/>
                </div>
            )
        )
    );


    if (loading) {
        return <Loading/>
    } else if (error) {
        return <Error/>
    }

    return (
        <div className="chart-wrapper">
            {
                renderCharts()
            }
        </div>
    )
};

export default Charts
