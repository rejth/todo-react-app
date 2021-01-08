import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = ({ todos, onDeleted }) => {
  const elements = todos.map(item => {
    // деструктуризация объекта item. в переменну id - id из item, в переменную itemProps - все остальные переменные
    const { id, ...itemProps } = item;
    // используем spread-оператор, чтобы передать в компонент новые переменные (свойства)
    // имена создаваемых свойств элемента и имена свойств объекта item одинаковые
    // поэтому в данном случаем удобно использовать spread-оператор
    // для каждого элемента списка вводим уникальный id для оптимизации работы React
    // для чистоты кода передаем в TodoListItem только те свойства, которые используются компонентом
    return (
      <li className="list-group-item" key={ id }>
        <TodoListItem
          { ...itemProps }
          onDeleted={ () => onDeleted(id) }
        />
      </li>
    );
  });

  // * передаем в список ul массив JSX элементов elements
  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDeleted: PropTypes.func
};

export default TodoList;
