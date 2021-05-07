import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import dashboardReducer from "../containers/dashboard/reducer";
import dashboardSaga from "../containers/dashboard/sagas";

const sagaMiddleware = createSagaMiddleware();


const combinedReducers = combineReducers({
    dashboard: dashboardReducer,
});

const enhancers = [applyMiddleware(sagaMiddleware)];

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

const store = createStore(combinedReducers, composeEnhancers(...enhancers));

const sagas = [dashboardSaga];

sagas.forEach((saga) => {
    sagaMiddleware.run(saga);
});

export default store;
