import 'regenerator-runtime/runtime';
import { put, takeLatest } from 'redux-saga/effects';
import { actions, actionCreators } from './actions';
import Api from '../utils/Api';
import moment from 'moment';

/**
 * Do a request to appEnvConfig.endpoints.euroJackpotResults endpoinf (@see /config/{webpack_mode/services.js})
 * when the LOAD_RESULTS_REQUESTED action is dispatched
 * 
 * @param {object} action LOAD_RESULTS_REQUESTED @see actions.LOAD_RESULTS_REQUESTED
 * @returns {Generator<Promise<commander.ParseOptionsResult.unknown>|SimpleEffect<"PUT", PutEffectDescriptor<{payload: {data}, type: string}>>, void, *>}
 */
export const loadEuroJackpotResults = function* (action) {
    const { payload: { date } } = action;
    try {
        const { data } = (yield Api.get(appEnvConfig.endpoints.euroJackpotResults, {
            //maybe I could avoid the moment dependency, because the date format accepted
            //by the server is the reverse date from the combobox. So, date.split('-').reverse()
            //could be enough, but I prefer use moment tu allow i18n, for example
            urlParams: { date: moment(date, 'MM-DD-YYYY').format('YYYYDDMM') },
        }));
        yield put(actionCreators.loadResultsDone(data));
    } catch (ex) {
        yield put(actionCreators.loadResultsFailed( ex ));
    }
};

const euroJackpotSagas = [
    takeLatest(actions.LOAD_RESULTS_REQUESTED, loadEuroJackpotResults),
];

export default euroJackpotSagas;
