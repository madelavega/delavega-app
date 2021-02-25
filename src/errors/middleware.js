import { actionSuffix } from '../utils/actionGenerators';
const failedActionPattern =new RegExp(`.*${actionSuffix.FAILED}`);

/**
 * Error Manager middleware. To show an error after a failed request, the action payload must container
 * an error property with the exception of the request into the saga
 * @returns {function(*): function(*): function(*=): void}
 */
export default () => () => next => action => {
    const { payload, type } = action,
        errorInfo = payload?.data?.errorInfo ?? payload?.errorInfo ?? null;

    if(failedActionPattern.test(type) && errorInfo) {
        // eslint-disable-next-line no-undef
        alert(`There was an error during the request:\n${errorInfo.filter(el => el).join('\n')}`);
    }
    //Do some stuff, like call another action to report errors to backend, save in Redux store, etc...
    next(action);
};