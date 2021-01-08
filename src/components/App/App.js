import React, { Component } from 'react';
import TodoList from '../TodoList/TodoList';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import AddTodoItemForm from '../AddTodoItemForm/AddTodoItemForm';

// имя компонента должно быть с заглавной буквы, иначе Babel не поймет, что создается кастомный компонент
export default class App extends Component {
  initId = 0;

  // внутренее состояние компонента
  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Have a lunch'),
      this.createTodoItem('Build Awesome React App')
    ]
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.initId++
    };
  }

  deleteItem = id => {
    // setState работает асинхронно!
    // если текущее состояние компонента зависит от предыдущего, нужно передавать в функцию аргумент state для
    // получения актуального на момент вызова функции состояния,
    // иначе можно передавать в stateState просто объект
    // редактировать старый state и его свойства напрямую нельзя!
    // любое обновление state проводить только через setState и передачи в него нового объекта
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
      const newItem = this.createTodoItem(text);
      return {
        todoData: [ ...todoData, newItem ]
      };
    });
  }

  toggleTodoProperty = (arr, id, property) => {
    const selectedItemId = arr.findIndex(item => item.id === id);
    const oldItem = arr[selectedItemId];
    const newItem = { ...oldItem, [property]: !oldItem[property] };
    return [
      ...arr.slice(0, selectedItemId),
      newItem,
      ...arr.slice(selectedItemId + 1)
    ];
  }

  toggleImportant = id => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleTodoProperty(todoData, id, 'important')
    }));
  }

  toggleDone = id => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleTodoProperty(todoData, id, 'done')
    }));
  }

  // render()- это функция, которая всегда возвращает (создает) JSX-элемент
  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter(item => item.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      // обращение к компоненту в JSX эквивалентно вызову метода React.createElement()
      <div className="todo-app">
        <AppHeader
          countTodo={ todoCount }
          countDone={ doneCount}
        />
        <div className="top-panel d-flex">
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>
        <TodoList
          todos={ this.state.todoData }
          onDeleted={ this.deleteItem }
          onToggleImportant={ this.toggleImportant }
          onToggleDone={ this.toggleDone }
        />
        <AddTodoItemForm
          onAdded={ this.addItem }
        />
      </div>
    );
  }
}
