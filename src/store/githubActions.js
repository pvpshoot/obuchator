import * as constants from './githubConstants';

export function changeUserName(name){
  return { type: constants.CHANGE_NAME, name }
}

export function startFetchRepos() {
  return { type: constants.FETCH_START }
}

export function finishFetchRepos(payload) {
  return { type: constants.FETCH_FINISH, payload }
}