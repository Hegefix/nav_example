import {takeLatest} from 'redux-saga/effects';
import {actionTypes} from '@constants';
import {bootsrapSaga} from './auth';

function* rootSaga() {
  yield takeLatest(actionTypes.AUTH_BOOTSTRAP_ASYNC, bootsrapSaga);
}

export default rootSaga;
