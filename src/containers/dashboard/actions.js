import types from "./action-types";

export const getDomainMetrics = (data) => ({
  type: types.GET_DOMAIN_METRICS,
  data: {
    start_date: data && Math.round(data.start_date.getTime() / 1000),
    end_date: data && Math.round(data.end_date.getTime() / 1000),
  },
});

export const getDomainMetricsSuccess = (data) => ({
  type: types.GET_DOMAIN_METRICS_SUCCESS,
  data,
});

export const getDomainMetricsError = () => ({
  type: types.GET_DOMAIN_METRICS_ERROR,
});
