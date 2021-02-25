import { all } from 'redux-saga/effects';
import euroJackpotSagas from './EuroJackpotResults/sagas';

export default function* rootSaga() {
    yield all([
        ...euroJackpotSagas,
    ]);
}
