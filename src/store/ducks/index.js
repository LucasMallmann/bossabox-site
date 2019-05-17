import { combineReducers } from 'redux';

import toolsReducer from './tools';
import modalReducer from './modal';

export default combineReducers({
  tools: toolsReducer,
  modal: modalReducer,
});
