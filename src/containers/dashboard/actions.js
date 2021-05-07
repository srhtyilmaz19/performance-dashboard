import types from './action-types';

export const getDomainMetrics = (data) => ({
    type: types.GET_DOMAIN_METRICS,
    data: {
        start_date: data && data.start_date.getTime() / 1000,
        end_date: data && data.end_date.getTime() / 1000,
    }
});


export const getDomainMetricsSuccess = (data) => ({
    type: types.GET_DOMAIN_METRICS_SUCCESS,
    data
});


export const getDomainMetricsError = (data) => ({
    type: types.GET_DOMAIN_METRICS_ERROR,
    data
});
