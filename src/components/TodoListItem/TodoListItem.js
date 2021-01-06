import React from 'react';
import PropTypes from 'prop-types';
import './TodoListItem.css';

// * для React первый аргумент функции-компонента - это объект со свойствами элемента
// * традиционное именование этого объекта - props
// * на данный момент в этом объекте хранятся два свойства: label и important
// * используем деструктуризацию, чтобы получить эти свойства
const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };

  return (
    <div className="todo-list-item">
      <span className="todo-list-item-label" style={ style }>{ label }</span>
      <button type="button" className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation"></i>
      </button>
      <button type="button" className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o"></i>
      </button>
    </div>
  );
};

TodoListItem.propTypes = {
  label: PropTypes.string.isRequired,
  important: PropTypes.bool
};

export default TodoListItem;
