import React, { Component } from 'react';
import TodoList from '../TodoList/TodoList';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';

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
      const deletedId = todoData.findIndex(el => el.id === id);
      const newTodoData = todoData.filter((el, index) => index !== deletedId);
      return {
        todoData: newTodoData
      };
    });
  }

  // react-компонент - это функция, которая всегда возвращает (создает) html-шаблон
  render() {
    return (
      // обращение к компоненту в JSX превращается эквивалентно вызову метода React.createElement()
      <div className="todo-app">
        <AppHeader countTodo={ 1 } countDone={ 3 }/>
        <div className="top-panel d-flex">
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>
        <TodoList todos={ this.state.todoData } onDeleted={ this.deleteItem }/>
      </div>
    );
  }
}
