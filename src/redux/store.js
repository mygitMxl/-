import {legacy_createStore,applyMiddleware }from 'redux'
 import {composeWithDevTools } from 'redux-devtools-extension'; 
import thunk from 'redux-thunk'
import { combineReducers } from 'redux-immutable';
import HeaerRducer from './reducers/HeadeRducer'
import HomeReducer from './reducers/HomeReducer';
import DetailReducer from './reducers/DetailReducer'
import LoginReducer from './reducers/LoginReucer';
const reducers=combineReducers({HeaerRducer,HomeReducer,DetailReducer,LoginReducer})
const store=legacy_createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))
export default store