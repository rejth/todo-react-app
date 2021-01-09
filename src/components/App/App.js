import React, { Component } from 'react';
import TodoList from '../TodoList/TodoList';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import AddTodoItemForm from '../AddTodoItemForm/AddTodoItemForm';

// Имя react-компонента должно быть с заглавной буквы, иначе Babel не поймет, что создается кастомный компонент
export default class App extends Component {
  // уникальный id задачи
  initId = 0;

  // Внутренее состояние компонента App
  state = {
    // массив задач
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Have a lunch'),
      this.createTodoItem('Build Awesome React App')
    ],
    // строка для поиска в массиве задач
    term: ''
  };

  // Создание новой задачи в массиве данных todoData в app state
  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.initId++
    };
  }

  // Удаление задачи из app state
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

  // Добавление новой задачи в app state
  addItem = text => {
    this.setState(({ todoData }) => {
      const newItem = this.createTodoItem(text);
      return {
        todoData: [ ...todoData, newItem ]
      };
    });
  }

  // Создание нового массива данных todoData
  toggleTodoProperty = (arr, id, property) => {
    // индекс выбранной задачи в массиве todoData
    const selectedItemId = arr.findIndex(item => item.id === id);
    // выбранная задача
    const oldItem = arr[selectedItemId];
    // новая задача с обновленными свойствами done или important
    const newItem = { ...oldItem, [property]: !oldItem[property] };
    return [
      ...arr.slice(0, selectedItemId),
      newItem,
      ...arr.slice(selectedItemId + 1)
    ];
  }

  // Обновление свойства important задачи в app state
  toggleImportant = id => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleTodoProperty(todoData, id, 'important')
    }));
  }

  // Обновление свойства done задачи в app state
  toggleDone = id => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleTodoProperty(todoData, id, 'done')
    }));
  }

  // Обновление свойства поиска term в app state
  onSearchChange = term => { this.setState({ term }); }

  // Поиск задач
  searchData = (todoData, term) => {
    if (term.length === 0) {
      return todoData;
    }
    return todoData.filter(item => item.label.indexOf(term) > -1);
  };

  // render()- это функция компонента-класса, которая всегда возвращает (создает) html-элемент
  render() {
    const { todoData, term } = this.state;
    // найденные в результате поиска задачи
    const searchedData = this.searchData(todoData, term);
    // количество сделанных задач
    const doneCount = todoData.filter(item => item.done).length;
    // количество активных задач
    const todoCount = todoData.length - doneCount;
    return (
      // обращение к react-элементу в JSX эквивалентно вызову метода React.createElement()
      // в react-элемент можно передавать свойства
      <div className="todo-app">
        <AppHeader
          countTodo={ todoCount }
          countDone={ doneCount}
        />
        <div className="top-panel d-flex">
          <SearchPanel
            onSearch={ this.onSearchChange }
          />
          <ItemStatusFilter/>
        </div>
        <TodoList
          todos={ searchedData }
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
