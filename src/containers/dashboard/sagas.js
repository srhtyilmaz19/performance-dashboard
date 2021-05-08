import { put, call, takeLatest } from "redux-saga/effects";
import types from "./action-types";
import domainServices from "./services";
import { getDomainMetricsError, getDomainMetricsSuccess } from "./actions";

function* getDomainMetricsObs(obj) {
  try {
    const res = yield call(() =>
      domainServices.list({
        domain: window.location.hostname,
        start_date: obj.data.start_date,
        end_date: obj.data.end_date,
      })
    );

    yield put(getDomainMetricsSuccess(res.data));
  } catch (e) {
    yield put(getDomainMetricsError());
  }
}

export default function* dashboardSaga() {
  yield takeLatest(types.GET_DOMAIN_METRICS, getDomainMetricsObs);
}
