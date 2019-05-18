import { all, takeLatest } from 'redux-saga/effects';

import { Types as ToolsTypes } from '../ducks/tools';

import { getTools, addTool, removeTool } from './tools';

export default function* rootSaga() {
  yield all([
    takeLatest(ToolsTypes.FETCH_REQUEST, getTools),
    takeLatest(ToolsTypes.ADD_REQUEST, addTool),
    takeLatest(ToolsTypes.REMOVE_REQUEST, removeTool),
  ]);
}
