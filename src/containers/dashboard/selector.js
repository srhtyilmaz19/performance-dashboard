import {createSelector} from 'reselect';
import {format} from "date-fns";

const metricsSelector = state => state.dashboard.metrics
const chartsSelector = state => state.dashboard.charts

const computedMetricsSelector = createSelector(
    metricsSelector,
    chartsSelector,
    (metrics, charts) => {
        return charts.map(chart => Object.assign({}, chart, {
            data: metrics.map(metric => ({
                value: metric[chart.key],
                x: new Date(metric.timestamp * 1000),
                y: metric[chart.key],
                label: format(new Date(metric.timestamp * 1000), 'HH:mm:ss'),
                timestamp: metric.timestamp
            }))
        }));
    }
);

export {computedMetricsSelector}
