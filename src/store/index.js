import { combineReducers, createStore } from 'redux';

import githubReducer from './githubReducer';

const identityReducer = (state = {}) => state;

export default createStore(combineReducers({
  identityReducer, 
  githubReducer
}));
