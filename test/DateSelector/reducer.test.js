import { actions } from '../../src/DateSelector/actions';
import reducer from '../../src/DateSelector/reducer';
const dates = [
    { value: '01-01-2021', text: '01-01-2021' },
    { value: '02-02-2021', text: '01-02-2021' },
    { value: '01-03-2021', text: '01-03-2021' },
    { value: '01-04-2021', text: '01-04-2021' },
    { value: '01-05-2021', text: '01-05-2021' },
    { value: '01-06-2021', text: '01-06-2021' },
];

let initialState;
const date = '01-01-2021';

describe('DateSelector reducer', () => {
    afterEach(() => {
        delete global.__mobxInstanceCount; // prevent warnings
    });
    it('should return the initial state', () => {
        expect(reducer(initialState, {})).toEqual(
            {
                selectedDate: null,
                dates,
            },
        );
    });

    it('should handle SELECT_DATE', () => {
        expect(
            reducer({
                selectedDate: null,
                dates,
            }, {
                type   : actions.SELECT_DATE,
                payload: { date },
            }),
        ).toEqual(
            {
                selectedDate: date,
                dates,
            },
        );
    });


    it('should handle SELECT_DATE', () => {
        expect(
            reducer({}, {
                type   : actions.SELECT_DATE,
                payload: { date },
            }),
        ).toEqual(
            {
                selectedDate: date,
            },
        );
    });
});