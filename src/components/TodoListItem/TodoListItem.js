import React from 'react';
import PropTypes from 'prop-types';
import './TodoListItem.css';

// * для React первый аргумент функции-компонента - это объект со свойствами элемента
// * традиционное именование этого объекта - props
// * на данный момент в этом объекте хранятся два свойства: label и important
// * используем деструктуризацию, чтобы получить эти свойства
const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? 'tomato' : 'black'
  };

  return (
    <span className="todo-list-item" style={ style }>{ label }</span>
  );
};

TodoListItem.propTypes = {
  label: PropTypes.string.isRequired,
  important: PropTypes.boolean
};

export default TodoListItem;
