import React from 'react';

const getClassName = name => {
  switch (name) {
    case 'info':
      return 'info'
    case 'warning':
      return 'warning'
    case 'danger':
      return 'danger'
    default:
      return 'secondary'
  }
}

export default function SymbolCount(props) {
  const {count, type} = props;
  return (
    <div 
      className={`badge badge-${getClassName(type)}`}
    >
      {count}
    </div>
  )
} 