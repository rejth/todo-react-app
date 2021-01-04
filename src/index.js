import React from 'react';
import ReactDom from 'react-dom';
import TodoList from './components/TodoList';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';

// * имя компонента должно быть с заглавной буквы, иначе Babel не поймет, что создается кастомный компонент
const App = () => {
	const todoData = [
		{ label: 'Drink Coffee', important: false },
		{ label: 'Have a lunch', important: false },
		{ label: 'Build React App', important: true },
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
}

// * первый аргумент метода ReactDom.render() принимает исключительно react-элемент
// * чтобы сделать react-элемент из компонента нужно прописать <.../>
ReactDom.render(<App/>, document.getElementById('root'));