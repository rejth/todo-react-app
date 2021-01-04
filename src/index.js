import React from 'react';
import ReactDom from 'react-dom';
import TodoList from './components/TodoList';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';

const App = () => {
	const todoData = [
		{ label: 'Drink Coffee', important: false },
		{ label: 'Have a lunch', important: false },
		{ label: 'Build React App', important: true },
	];

	return (
		<div>
			<AppHeader/>
			<SearchPanel/>
			<TodoList todos={ todoData }/>
		</div>
	);
}

ReactDom.render(<App/>, document.getElementById('root'));