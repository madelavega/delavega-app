import { actions } from './actions.js';

const initialState = {
    data: [
        { tier: 'I', match: '5 numbers + 2 euronumbers', winners: '0x', amount: '1000000' },
        { tier: 'II', match: '5 numbers + 1 euronumbers', winners: '3x', amount: '1000' },
        { tier: 'III', match: '5 numbers', winners: '3x', amount: '10000' },
        { tier: 'IV', match: '4 numbers + 1 euronumbers', winners: '13x', amount: '100000' },
    ],
};

const reducer = (state = initialState, action) => {
    const actionTypes = {
        [actions.LOAD_RESULTS]: () => {  // we won't reset on start, only on hide (using RESET_AND_HIDE)
            const { payload: { data } = {} } = action;
            return {
                ...state,
                data,
            };
        },
    };
    return actionTypes[action.type] ? actionTypes[action.type]() : { ...state };
};

export default reducer;
