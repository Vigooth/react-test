import { combineReducers } from 'redux';
import reducer_jedi from './reducer_jedi';
import reducer_template from './reducer_template';

const rootReducer = combineReducers({
  jedi: reducer_jedi,
  template: reducer_template,
});
export default rootReducer;
