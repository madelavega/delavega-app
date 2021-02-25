import actionGenerators from '../utils/actionGenerators';

const ACTION_PREFIX = 'DATE_SELECTOR',

    selectDate = actionGenerators(ACTION_PREFIX, 'SELECT_DATE');

export const actions = {
    SELECT_DATE: selectDate.action,
};

export const actionCreators = {
    /**
     * Fires the SELECT_DATE action when a date is selected with the dropdown component
     *
     * @param {String} date
     * @returns {{payload: {date}, type: string}}
     */
    selectDate: (date) => ({
        type   : actions.SELECT_DATE,
        payload: { date },
    }),
};

