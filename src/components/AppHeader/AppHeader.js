import React from 'react';
import PropTypes from 'prop-types';
import './AppHeader.css';

const AppHeader = ({ countTodo, countDone }) => (
  <div className="app-header d-flex">
    <h1>My To-Do List</h1>
    <h2>{ countTodo } more to do, { countDone } done</h2>
  </div>
);

AppHeader.propTypes = {
  countTodo: PropTypes.number.isRequired,
  countDone: PropTypes.number.isRequired
};

export default AppHeader;
