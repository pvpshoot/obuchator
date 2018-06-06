import React, { Component } from 'react';
import { compose } from 'recompose';
import { inject, observer } from 'mobx-react';
import { changeUserName, finishFetchRepos, startFetchRepos } from '../../store/githubActions';

import Button from '../../components/TweetButton';
import Input from '../../components/Input';
import ReposTable from '../../components/ReposTable';
import { connect } from 'react-redux';

class GithubApp extends Component {
  render() {
    const { getUserRepos, setName, user, repos, status } = this.props.gitHubUserRepositoriesStore;
    console.log(repos);
    return (
      <div>
        <h1>{this.constructor.name}</h1>
        <h2>{status}</h2>
        <Input placeholder="Имя" value={user} onChange={setName} />
        <Button onClick={getUserRepos}>Поиск</Button>
        <ReposTable data={repos} />
      </div>
    );
  }
}

export default compose(
  inject('gitHubUserRepositoriesStore'),
  observer,
)(GithubApp);
