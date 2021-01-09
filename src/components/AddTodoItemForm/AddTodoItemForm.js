import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddTodoItemForm.css';

export default class AddTodoItemForm extends Component {
  state = {
    label: ''
  }

  onLabelChange = e => {
    // текущий state компонента не зависит от предыдущего,
    // поэтому мы сразу передаем объект без обращения к state
    // для получения предыдущего состояния
    this.setState({
      label: e.target.value
    });
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.onAdded(this.state.label);
    // очистка input
    this.setState({
      label: ''
    });
  }

  render() {
    return (
      // связь между html-элементом input и react-компонентом односторонняя,
      // т.е. html-элемент передает компоненту событие и оно срабатывает,
      // только когда html-элемент изменяется. Иными словами, если state компонется изменится,
      // html-элемент об этом никак не узнает. Такой html-элемент называется неконтролируемым (uncontrolled)
      // передавая в value элемента значение из state компонента мы делаем элемент контролируемым (controlled)
      <form
        className="add-item-form d-flex"
        onSubmit={ this.onSubmit }>

        <input
          className="form-control search-input"
          type="text"
          placeholder="type to add new task"
          value={ this.state.label }
          onChange={ this.onLabelChange }>
        </input>

        <button
          type="submit"
          className="add-item-btn btn btn-outline-primary">
          Add task
        </button>
      </form>
    );
  }
}

AddTodoItemForm.propTypes = {
  onAdded: PropTypes.func
};
