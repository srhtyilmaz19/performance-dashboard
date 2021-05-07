import types from './action-types';

const initialState = {
    loading: true,
    error: false,
    metrics: [],
    charts: [
        {key: 'fcp', label: 'First Contentful Paint', data: []},
        {key: 'ttfb', label: 'Time To First Byte', data: []},
        {key: 'dom_load', label: 'DOM Load', data: []},
        {key: 'window_load', label: 'Window Load', data: []},
    ]


};

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.GET_DOMAIN_METRICS:
            return {
                ...state,
                loading: true,
                error: false,
                metrics: []
            }

        case types.GET_DOMAIN_METRICS_SUCCESS:
            return {
                ...state,
                metrics: action.data,
                loading: false
            }

        case types.GET_DOMAIN_METRICS_ERROR:
            return {
                ...state,
                metrics: [],
                loading: false,
                error: true,
            }


        default:
            return state;
    }
};

export default dashboardReducer;
