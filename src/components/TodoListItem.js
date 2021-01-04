import React from 'react';

// для React первый аргумент функции-компонента - это объект со свойствами элемента
// в нашем случае свойство - это свойство label
const TodoListItem = ({ label , important = false }) => {
	const style = {
		color: important ? 'tomato' : 'black'
	};
	return (
		<span style={ style }>{ label }</span>
	);
};

export default TodoListItem;