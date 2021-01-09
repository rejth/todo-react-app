import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  // создаем массив JSX-элементов на основе массива данных todoData
  const elements = todos.map(item => {
    // деструктуризация объекта item (задача).
    // в переменну id - свойство id из item, в переменную itemProps - все остальные свойства
    const { id, ...itemProps } = item;
    // используем spread-оператор, чтобы передать в компонент новые переменные (свойства)
    // имена создаваемых свойств элемента и имена свойств объекта item одинаковые,
    // поэтому в данном случаем удобно использовать spread-оператор
    // для каждого элемента списка вводим уникальный id для оптимизации скорости работы React
    // для чистоты кода передаем в TodoListItem только те свойства, которые используются компонентом
    return (
      <li className="list-group-item" key={ id }>
        <TodoListItem
          { ...itemProps }
          onDeleted={ () => onDeleted(id) }
          onToggleImportant={ () => onToggleImportant(id) }
          onToggleDone={ () => onToggleDone(id) }
        />
      </li>
    );
  });

  // передаем в список ul массив JSX элементов elements
  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDeleted: PropTypes.func,
  onToggleImportant: PropTypes.func,
  onToggleDone: PropTypes.func
};

export default TodoList;
