import React from 'react';
import ReactDom from 'react-dom';

// имя компонента с заглавной буквы
// компонент - это функция которая возвращает (создает) html-шаблон
// обращение к компоненту в JSX превращается в вызов метода React.createElement()
const TodoList = () => {
  const items = ['Drink coffee', 'Create Awesome App'];
  return (
    <ul>
      <li>{ items[0] }</li>
      <li>{ items[1] }</li>
    </ul>
  );
}

const AppHeader = () => {
  return (
    <h1>My To-Do List</h1>
  );
}

const SearchPanel = () => {
  return (
    <input placeholder="search"></input>
  );
}

const App = () => {
  return (
    <div>
      <AppHeader/>
      <SearchPanel/>
      <TodoList/>
    </div>
  );
}

// первый аргумент метода ReactDom.render() принимает элемент, а не компонент
// чтобы сделать из компонента элемента нужно прописать <.../>
ReactDom.render(<App/>, document.getElementById('root'));