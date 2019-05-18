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

export function* addTool(action) {
  try {
    const { payload } = action;
    console.log(payload);
    const { data } = yield call(api.post, '/tools', payload);
    yield put(ToolsActions.addSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(ToolsActions.requestFailure('Not able to add tool'));
  }
}

export function* removeTool(action) {
  try {
    const { id } = action.payload;
    yield call(api.delete, `/tools/${id}`);
    yield put(ToolsActions.removeSuccess(id));
  } catch (error) {
    console.log(error);
    yield put(ToolsActions.requestFailure("It wasn't possible to delete the tool"));
  }
}
