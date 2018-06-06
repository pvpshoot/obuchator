import React from 'react';

export default function TweetInput(props) {
  const onChange = e => props.onChange(e.target.value);
  return <textarea value={props.value} onChange={onChange} className="form-control" cols="10" rows="3"></textarea>
}