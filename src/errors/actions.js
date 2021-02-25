import actionGenerators from '../utils/actionGenerators';

const APP_ERRORS = 'APP_ERRORS',

    launchFetchError = actionGenerators(APP_ERRORS, 'FETCH_FAILED');

export const actions = {
    FETCH_FAILED: launchFetchError.action,
};

export const actionCreators = {
    launchError: (errorInfo) => ({
        type   : actions.FETCH_FAILED,
        payload: { errorInfo },
    }),
};

