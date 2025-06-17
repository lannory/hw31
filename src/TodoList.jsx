import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';

function TodoList(props) {

	const todos = useSelector(state => state.todo);

	return (
		<div>
			{todos.map(item => <ListItem obj={item} key={item.id}/>)}
		</div>
	);
}

export default TodoList;