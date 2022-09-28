import { createStore, applyMiddleware, compose } from 'redux';
import { weahterReducer } from './reducers/weatherReducer';
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store=createStore(weahterReducer,composeEnhancers(applyMiddleware(thunk)))