import { actions } from './actions';

const initialState = {
    selectedDate: null,
    dates       : [
        { value: '01-01-2021', text: '01-01-2021' },
        { value: '02-02-2021', text: '01-02-2021' },
        { value: '01-03-2021', text: '01-03-2021' },
        { value: '01-04-2021', text: '01-04-2021' },
        { value: '01-05-2021', text: '01-05-2021' },
        { value: '01-06-2021', text: '01-06-2021' },
    ],
};

const reducer = (state = initialState, action) => {
    const actionTypes = {
        [actions.SELECT_DATE]: () => {  // we won't reset on start, only on hide (using RESET_AND_HIDE)
            const { payload: { date: selectedDate } = {} } = action;
            return {
                ...state,
                selectedDate,
            };
        },
    };
    return actionTypes[action.type] ? actionTypes[action.type]() : { ...state };
};

export default reducer;
