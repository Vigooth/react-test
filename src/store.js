import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { TEMPLATE_CHANGE } from "./actions/types";

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(thunk))(createStore);
const store = createStoreWithMiddleware(reducers);
const template = localStorage.getItem('template');
if (template) {
  store.dispatch({type: TEMPLATE_CHANGE, template})
}
export { store }
