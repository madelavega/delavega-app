import { actions } from './actions.js';

const initialState = {
    data   : [],
    loading: false,
};

const reducer = (state = initialState, action) => {
    const actionTypes = {
        [actions.LOAD_RESULTS_REQUESTED]: () => {
            return {
                ...state,
                loading: true,
                data   : [],
            };
        },
        [actions.LOAD_RESULTS_DONE]: () => {
            const { payload: { data } = {} } = action;
            return {
                ...state,
                loading: false,
                data,
            };
        },
        [actions.LOAD_RESULTS_FAILED]: () => {
            return {
                ...state,
                data   : [],
                loading: false,
            };
        },
    };
    return actionTypes[action.type] ? actionTypes[action.type]() : { ...state };
};

export default reducer;
