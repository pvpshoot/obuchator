import React from 'react';
import { connect } from 'react-redux';
import styles from './ReposTable.css';

function ReposTable(props) {
  const { data } = props;
  const renderTr = (el, index) => (
    <tr key={el.html_url}>
      <td>{index + 1}</td>
      <td>{el.name}</td>
      <td>{el.stargazers_count}</td>
      <td>
        <a href={el.html_url}>{el.html_url}</a>
      </td>
    </tr>
  );

  return (
    <table className={`table ${styles.table}`}>
      <thead>
        <tr>
          <th>Id:</th>
          <th>Name:</th>
          <th>Stars:</th>
          <th>Link:</th>
        </tr>
      </thead>
      <tbody>{data.map(renderTr)}</tbody>
    </table>
  );
}

export default ReposTable;
