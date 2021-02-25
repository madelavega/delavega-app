const actionPrefix = 'DATE_SELECTOR';
const genAction = (action) => `${actionPrefix}_${action}`;

export const actions = {
    SELECTED_DATE: genAction('SELECTED_DATE'),
};

export const actionCreators = {
    /**
     *
     * @param {String} date
     * @returns {{payload: {date}, type: string}}
     */
    selectDate: (date) => ({
        type   : actions.SELECTED_DATE,
        payload: { date },
    }),
};

