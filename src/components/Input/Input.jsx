import React from 'react';

export default function Input(props) {
  const onChange = e => props.onChange(e.target.value)
  return <input 
    type="text" 
    onChange={onChange} 
    value={props.value}
    placeholder={props.placeholder}
  />
}