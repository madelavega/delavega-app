import { actionCreators, actions } from '../../src/DateSelector/actions';

describe('DateSelector actions', () => {
    afterEach(() => {
        delete global.__mobxInstanceCount; // prevent warnings
    });
    it('should create an action when a date is selected', () => {
        const date = '01-01-2021';
        const expectedAction = {
            type   : actions.SELECT_DATE,
            payload: { date },
        };
        expect(actionCreators.selectDate(date)).toEqual(expectedAction);
    });
});