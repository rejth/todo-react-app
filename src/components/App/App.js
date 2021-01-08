import React, { Component } from 'react';
import TodoList from '../TodoList/TodoList';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import AddTodoItemForm from '../AddTodoItemForm/AddTodoItemForm';

// имя компонента должно быть с заглавной буквы, иначе Babel не поймет, что создается кастомный компонент
export default class App extends Component {
  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Have a lunch', important: false, id: 2 },
      { label: 'Build Awesome React App', important: true, id: 3 },
    ]
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const deletedId = todoData.findIndex(item => item.id === id);
      const newTodoData = todoData.filter((item, index) => index !== deletedId);

      return {
        todoData: newTodoData
      };
    });
  }

  addItem = text => {
    this.setState(({ todoData }) => {
      const newItem = {
        label: text,
        important: false,
        id: todoData.length + 1
      };

      return {
        todoData: [ ...todoData, newItem ]
      };
    });
  }

  // react-компонент - это функция, которая всегда возвращает (создает) html-шаблон
  render() {
    return (
      // обращение к компоненту в JSX превращается эквивалентно вызову метода React.createElement()
      <div className="todo-app">
        <AppHeader
          countTodo={ 1 }
          countDone={ 3 }
        />
        <div className="top-panel d-flex">
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>
        <TodoList
          todos={ this.state.todoData }
          onDeleted={ this.deleteItem }
        />
        <AddTodoItemForm
          onAdded={ this.addItem }
        />
      </div>
    );
  }
}
