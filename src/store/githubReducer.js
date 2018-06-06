import * as constants from './githubConstants';

import { merge } from 'ramda';

const initialState = {
  name: 'pvpshoot',
  data: [],
  status: 'initial',
}

export default function githubReducer(state = initialState, action) {
  switch (action.type) {
    case constants.CHANGE_NAME:
      return Object.assign({}, state, { state, name: action.name });  
         
    case constants.FETCH_START:
      return  Object.assign({}, state, { status: 'loading' });     

    case constants.FETCH_FINISH:
      return merge(state, { status: 'done', data: action.payload });     
      
    default:
      return state;
  }
}