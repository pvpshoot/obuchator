import React from 'react';

const getClassName = name => {
  switch (name) {
    case 'success':
      return 'success'
    default:
      return 'primary'
  }
}

export default function TweetButton(props) {
  const {disabled, type, onClick} = props;
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${getClassName(type)}`}
    >
      {props.children}
    </button>
  )
}