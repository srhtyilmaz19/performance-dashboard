import {createSelector} from 'reselect';

const metricsSelector = state => state.dashboard.metrics
const chartsSelector = state => state.dashboard.charts

const computedMetricsSelector = createSelector(
    metricsSelector,
    chartsSelector,
    (metrics, charts) => {
        return charts.map(chart => Object.assign({}, chart, {
            data: metrics.map(metric => ({
                value: metric[chart.key],
                timestamp: metric.timestamp
            }))
        }));
    }
);

export {computedMetricsSelector}
