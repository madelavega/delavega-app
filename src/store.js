import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import errorsManagerMiddleware from './errors/middleware';
import appReducer from './appReducer';
import sagas from './sagas.js';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    appReducer,
    compose(applyMiddleware(
        sagaMiddleware,
        errorsManagerMiddleware(),
    )),
);

sagaMiddleware.run(sagas);

export default store;
