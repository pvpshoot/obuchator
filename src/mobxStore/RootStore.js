import GitHubUserRepositoriesStore from './GitHubUserRepositoriesStore';

class RootStore {
  constructor(initialState = {}) {
    this.gitHubUserRepositoriesStore = new GitHubUserRepositoriesStore(initialState.gitHubUserRepositoriesStore);
  }
}

export default RootStore;
