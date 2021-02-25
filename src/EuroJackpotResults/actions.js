const actionPrefix = 'EURO_JACKPOT_RESULTS';
const genAction = (action) => `${actionPrefix}_${action}`;

export const actions = {
    LOAD_RESULTS: genAction('LOAD_RESULTS'),
};

export const actionCreators = {
    /**
     *
     * @param {String} date
     * @returns {{payload: {date}, type: string}}
     */
    loadResults: (date) => ({
        type   : actions.LOAD_RESULTS,
        payload: { date },
    }),
};

