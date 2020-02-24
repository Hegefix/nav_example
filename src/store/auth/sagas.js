import {call, put} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import * as actionTypes from './actionTypes';

export function* bootsrapSaga() {
  try {
    yield put({type: actionTypes.SET_IS_LOADING, payload: true});
    const userToken = yield call(AsyncStorage.getItem, '@userToken');
    console.log('user token', userToken);
    if (userToken) {
      // check token or refresh it
      yield put({type: actionTypes.SET_TOKEN, payload: userToken});
    }
  } catch (error) {
    yield put({type: actionTypes.SET_ERROR, payload: error.message});
  } finally {
    yield put({type: actionTypes.SET_IS_LOADING, payload: false});
  }
}
