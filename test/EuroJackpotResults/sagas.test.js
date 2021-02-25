import { runSaga } from 'redux-saga';
import sinon from 'sinon';
import Api from '../../src/utils/Api';
import { loadEuroJackpotResults } from '../../src/EuroJackpotResults/sagas';
import { actionCreators } from '../../src/EuroJackpotResults/actions';
import { data, errorMock } from './mocks';
import moment from 'moment';

describe( 'Testing sagas for euroJackpotResults Sagas', () => {

    const date ='12-20-2021',
        serviceDateFormat = 'YYYYDDMM';

    //if true, saga will works fine... else it will fail
    let mustFail;

    /*
        Wrapping the Api get method to saga testing
     */
    sinon.stub(Api, 'get').callsFake(( url, { urlParams : { date: urlDateParam } } ) => new Promise((resolve, reject) => {
        //expected url param date format
        expect(urlDateParam).toEqual(moment(date, 'MM-DD-YYYY').format(serviceDateFormat));
        mustFail ? reject(errorMock) : resolve({ data });
    }));
    
    test('loadEuroJackpotResults saga works successfully',  async () => {
        mustFail = false;

        const dispatched = [],
            actionPayload = { payload: { date } };

        await runSaga({
            dispatch: (action) => {
                return dispatched.push(action);
            },
            getState: () => ({}),
        }, loadEuroJackpotResults, actionPayload);

        expect(dispatched).toEqual([actionCreators.loadResultsDone(data)]);
    });

    test('loadEuroJackpotResults saga fails',  async () => {
        mustFail = true; //for example, because an HTTP error...

        const dispatched = [],
            date ='12-20-2021',
            actionPayload = { payload: { date } };

        await runSaga({
            dispatch: (action) => {
                return dispatched.push(action);
            },
            getState: () => ({}),
        }, loadEuroJackpotResults, actionPayload);

        expect(dispatched).toEqual([actionCreators.loadResultsFailed(errorMock)]);
    });
});