import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddTodoItemForm.css';

export default class AddTodoItemForm extends Component {
  render() {
    const { onAdded } = this.props;
    return (
      <div className="add-item-form d-flex">
        <input
          className="form-control search-input"
          type="text"
          placeholder="type to add new task"></input>
        <button
          type="button"
          className="add-item-btn btn btn-outline-secondary"
          onClick={ () => onAdded('Hello World') }>Add task</button>
      </div>
    );
  }
}

AddTodoItemForm.propTypes = {
  onAdded: PropTypes.func
};
