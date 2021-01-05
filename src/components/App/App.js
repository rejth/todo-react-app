import React from 'react';
import TodoList from '../TodoList/TodoList';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';

// * имя компонента должно быть с заглавной буквы, иначе Babel не поймет, что создается кастомный компонент
const App = () => {
  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Have a lunch', important: false, id: 2 },
    { label: 'Build React App', important: true, id: 3 },
  ];
  // * react-компонент - это функция, которая всегда возвращает (создает) html-шаблон
  return (
  // * обращение к компоненту в JSX превращается эквивалентно вызову метода React.createElement()
    <div>
      <AppHeader/>
      <SearchPanel/>
      <TodoList todos={ todoData }/>
    </div>
  );
};

export default App;
