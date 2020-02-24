import {takeLatest} from 'redux-saga/effects';
import {BOOTSTRAP_ASYNC} from './auth/actionTypes';
import {bootsrapSaga} from './auth/sagas';

function* appSaga() {
  yield takeLatest(BOOTSTRAP_ASYNC, bootsrapSaga);
}

export default appSaga;
