import { combineReducers } from 'redux';
import reducer_jedi from './reducer_jedi';
import reducer_template from './reducer_template';
import reducer_filter from './reducer_filter';

const rootReducer = combineReducers({
  jedi: reducer_jedi,
  template: reducer_template,
  filter: reducer_filter,
});

export default rootReducer;
