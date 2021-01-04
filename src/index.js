import React from 'react';
import ReactDom from 'react-dom';
import TodoList from './components/TodoList';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';

const App = () => {
	return (
		<div>
			<AppHeader/>
			<SearchPanel/>
			<TodoList/>
		</div>
	);
}

ReactDom.render(<App/>, document.getElementById('root'));