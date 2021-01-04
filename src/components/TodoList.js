import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => {
	const elements = todos.map(item => {
		// * используем spread-оператор, чтобы передать в компонент новые переменные (свойства)
		// * имена создаваемых свойств элемента и имена свойств объекта item одинаковые
		// * поэтому в данном случаем удобно использовать spread-оператор
		return (
			<li>
				<TodoListItem { ...item }/>
			</li>
		)
	})

	// * передаем в список ul массив JSX элементов elements
	return (
		<ul>
			{ elements }
		</ul>
	);
};

export default TodoList;