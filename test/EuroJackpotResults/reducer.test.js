import { actions } from '../../src/EuroJackpotResults/actions';
import reducer from '../../src/EuroJackpotResults/reducer';
import { data } from './mocks';

describe('EuroJackpotResults reducer', () => {
    afterEach(() => {
        delete global.__mobxInstanceCount; // prevent warnings
    });

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                data   : [],
                loading: false,
            },
        );
    });

    it('should handle LOAD_RESULTS_REQUESTED withouf previous data', () => {
        expect(
            reducer({}, {
                type   : actions.LOAD_RESULTS_REQUESTED,
                payload: { date: '01-01-2021' },
            }),
        ).toEqual(
            {
                loading: true,
                data   : [],
            },
        );
    });

    it('should handle LOAD_RESULTS_REQUESTED with previous data', () => {
        expect(
            reducer({ data: [{ value: 1 }] }, {
                type   : actions.LOAD_RESULTS_REQUESTED,
                payload: { date: '01-01-2021' },
            }),
        ).toEqual(
            {
                loading: true,
                data   : [],
            },
        );
    });

    it('should handle LOAD_RESULTS_DONE (first load)', () => {
        expect(
            reducer({
                loading: true,
                data   : [],
            }, {
                type   : actions.LOAD_RESULTS_DONE,
                payload: { data },
            }),
        ).toEqual(
            {
                data,
                loading: false,
            },
        );
    });

    it('should handle LOAD_RESULTS_FAILED (with previous data)', () => {
        expect(
            reducer({ data }, {
                type: actions.LOAD_RESULTS_FAILED,
            }),
        ).toEqual(
            {
                data   : [],
                loading: false,
            },
        );
    });

    it('should handle LOAD_RESULTS_FAILED (without previous data)', () => {
        expect(
            reducer({ loading: true }, {
                type: actions.LOAD_RESULTS_FAILED,
            }),
        ).toEqual(
            {
                loading: false,
                data   : [],
            },
        );
    });

    let data2 = [data[0]];
    it('should handle LOAD_RESULTS_DONE (with array empty previous data)', () => {
        expect(
            reducer({ loading: true, data: [] }, {
                type   : actions.LOAD_RESULTS_DONE,
                payload: { data: data2 },
            }),
        ).toEqual(
            {
                data   : data2,
                loading: false,
            },
        );
    });


    it('should handle LOAD_RESULTS_DONE (with previous data)', () => {
        expect(
            reducer({ loading: true, data }, {
                type   : actions.LOAD_RESULTS_DONE,
                payload: { data: data2 },
            }),
        ).toEqual(
            {
                data   : data2,
                loading: false,
            },
        );
    });
});