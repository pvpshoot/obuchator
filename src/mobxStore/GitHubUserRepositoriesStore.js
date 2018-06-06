import axios from 'axios';
import { observable, action, decorate } from 'mobx';

class GitHubUserRepositoriesStore {
  constructor(initialState = {}) {
    this.user = initialState.user || '';
    this.status = initialState.status || 'initial';
    this.repos = initialState.repos || [];
  }

  getUserRepos = async () => {
    this.status = 'loading';

    try {
      const { data } = await axios.get(`https://api.github.com/users/${this.user}/repos`);
      this.repos = data;
      this.status = 'done';
    } catch (e) {
      this.repos = [];
      this.status = 'error';
    }
  };

  setName = name => {
    this.user = name;
  };
}

decorate(GitHubUserRepositoriesStore, {
  user: observable,
  repos: observable,
  status: observable,
  getUserRepos: action,
  setName: action,
});

export default GitHubUserRepositoriesStore;
