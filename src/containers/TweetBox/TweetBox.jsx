import React, { Component } from 'react';

import SymbolCount from '../../components/SymbolCount'
import TweetButton from '../../components/TweetButton'
import TweetInput from '../../components/TweetInput'

export default class TweetBox extends Component{
  constructor(props){
    super(props)
    
    this.state = {
      value: '',
      status: 'done'
    }

    this.MAX_LENGTH = 60
  }

  handleTextChange = text => {
    this.setState({ value: text })
  }

  checkDisabledButton = () => {
    const { value } = this.state;
    return value.length === 0 
      || value.length > this.MAX_LENGTH
      || this.state.status === 'pending'
  }

  getCounterType = () => {
    const { value } = this.state;
    
    if(value.length > this.MAX_LENGTH * 0.8 && value.length < this.MAX_LENGTH * 0.9 ) {
      return 'info';
    } else if (value.length >= this.MAX_LENGTH * 0.9 && value.length <= this.MAX_LENGTH) {
      return 'warning'
    } else if(value.length > this.MAX_LENGTH) {
      return 'danger'
    } 

    return 'secondary'
  }

  getSubmitButtonType = () => {
    if (this.state.status === 'done') {
      return 'success'
    }
    return 'primary'
  }

  renderCounter = () => {
    const { value } = this.state;
    if(value.length >= this.MAX_LENGTH * 0.7) {
      return (
        <SymbolCount 
          count={this.state.value.length} 
          type={this.getCounterType()}
        />
      )
    }
    return <div/>
  }

  renderSubmitButton = () => {
    return (
      <TweetButton
        type={this.getSubmitButtonType()}
        disabled={this.checkDisabledButton()}
      > 
        T-W-E-E-T! 
      </TweetButton>
    )
  }
  
  render() {
    return (
      <div>
        <TweetInput onChange={this.handleTextChange} value={this.state.value}/>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          {this.renderCounter()}
          {this.renderSubmitButton()}
        </div>
      </div>
    )
  }
}