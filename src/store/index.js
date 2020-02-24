import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import appReducer from './appReducer';
import appSaga from './appSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(appSaga);

export default store;
