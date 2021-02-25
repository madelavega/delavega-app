import actionGenerators from '../utils/actionGenerators';

const ACTION_PREFIX = 'EURO_JACKPOT_RESULTS',

    loadResulstRequest = actionGenerators(ACTION_PREFIX, 'LOAD_RESULTS_REQUESTED');

export const actions = {
    LOAD_RESULTS_REQUESTED: loadResulstRequest.action,
    LOAD_RESULTS_DONE     : loadResulstRequest.requestDoneAction(),
    LOAD_RESULTS_FAILED   : loadResulstRequest.requestFailedAction(),
};

export const actionCreators = {
    /**
     * Fires the LOAD_RESULTS_REQUESTED action to load euro jackpot data for the date received
     *
     * @param {String} date
     * @returns {{payload: {date}, type: string}}
     */
    loadResults: (date) => ({
        type   : actions.LOAD_RESULTS_REQUESTED,
        payload: { date },
    }),

    /**
     * Fires the LOAD_RESULTS_DONE action with the loaded eurojackpot data, after doing a request
     *
     * @param data
     * @returns {{payload: {data}, type: string}}
     */
    loadResultsDone: (data) => ({
        type   : actions.LOAD_RESULTS_DONE,
        payload: { data },
    }),

    /**
     * Fires the LOAD_RESULTS_FAILED action, when something wrong happens when LOAD_RESULTS_REQUESTED is dispatched
     *
     * @param data
     * @returns {{payload: {data}, type: string}}
     */
    loadResultsFailed: ({ error, ...rest }) => ({
        type   : actions.LOAD_RESULTS_FAILED,
        payload: { error, ...rest },
    }),
};

