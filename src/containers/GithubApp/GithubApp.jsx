import React, { Component } from "react";
import { changeUserName, finishFetchRepos, startFetchRepos } from '../../store/githubActions';

import Button from "../../components/TweetButton";
import Input from "../../components/Input";
import ReposTable from "../../components/ReposTable";
import { connect } from "react-redux";

class GithubApp extends Component {
  handleNameChange = name => {
    this.props.changeUserName(name);
  };

  onFormSubmit = () => {
    this.fetchUsersRepos(this.props.name);
  };

  fetchUsersRepos = name => {
    this.props.startFetchRepos();
    fetch(`https://api.github.com/users/${name}/repos`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.props.finishFetchRepos(data);
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

  render() {
    console.log('===========================');
    console.log('props', this.props);
    console.log('===========================');
    return (
      <div>
        <h1>{this.constructor.name}</h1>
        <h2>{this.props.status}</h2>
        <Input
          placeholder="Имя"
          value={this.props.name}
          onChange={this.handleNameChange}
        />
        <Button onClick={this.onFormSubmit}>Поиск</Button>
        <ReposTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.githubReducer.name,
  status: state.githubReducer.status,
  data: state.githubReducer.data,
})

const mapDispatchToProps = {
  changeUserName,
  finishFetchRepos, 
  startFetchRepos
}

export default  connect(mapStateToProps, mapDispatchToProps)(GithubApp);