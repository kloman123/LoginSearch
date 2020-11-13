import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//import {composeWithDevTools } from "redux-devtools-extension";
// import logger from 'redux-logger';
import rootReducer from '../reducer/index';

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;