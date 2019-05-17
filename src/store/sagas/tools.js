import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ToolsActions } from '../ducks/tools';

export function* getTools(action) {
  try {
    const { search } = action.payload;
    const { data } = yield call(api.get, `/tools${search}`);
    yield put(ToolsActions.fetchSuccess(data));
  } catch (error) {
    yield put(ToolsActions.requestFailure('Didnt find any tools'));
  }
}
