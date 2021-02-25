import { actionCreators, actions } from '../../src/EuroJackpotResults/actions';
import { data, errorMock } from './mocks';


describe('EuroJackpotResults actions', () => {
    afterEach(() => {
        delete global.__mobxInstanceCount; // prevent warnings
    });
    it('should create an action to call euro jackpot results', () => {
        const date = '01-01-2021';
        const expectedAction = {
            type   : actions.LOAD_RESULTS_REQUESTED,
            payload: { date },
        };
        expect(actionCreators.loadResults(date)).toEqual(expectedAction);
    });

    it('should create an action to get the data from the euro jackpot request', () => {
        const expectedAction = {
            type   : actions.LOAD_RESULTS_DONE,
            payload: { data },
        };
        expect(actionCreators.loadResultsDone(data)).toEqual(expectedAction);
    });

    it('should create an action when the euro jackpot request fails', () => {
        const expectedAction = {
            type   : actions.LOAD_RESULTS_FAILED,
            payload: errorMock,
        };
        expect(actionCreators.loadResultsFailed(errorMock)).toEqual(expectedAction);
    });
});