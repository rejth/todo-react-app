import React from 'react';

// * для React первый аргумент функции-компонента - это объект со свойствами элемента
// * традиционное именование этого объекта - props
// * на данный момент в этом объекте хранятся два свойства: label и important
// * используем деструктуризацию, чтобы получить эти свойства
const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? 'tomato' : 'black'
  };

  return (
    <span style={ style }>{ label }</span>
  );
};

export default TodoListItem;
