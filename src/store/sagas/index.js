import { all, takeLatest } from 'redux-saga/effects';

import { Types as ToolsTypes } from '../ducks/tools';

import { getTools } from './tools';

export default function* rootSaga() {
  yield all([takeLatest(ToolsTypes.FETCH_REQUEST, getTools)]);
}
