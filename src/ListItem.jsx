import React from 'react';
import { useDispatch } from 'react-redux';
import { checkTask, deleteTask } from './store/todoSlice';
import './Todos.css';
import EditBtn from './EditBtn';

function ListItem({obj}) {

	const dispatch = useDispatch();

	const handleCheck = () =>{
		dispatch(checkTask(obj.id));
	}

	const handleDelete = () => {
		dispatch(deleteTask(obj.id));
	}

	const handleEdit = () =>{

	}

	return (
		<div className='item'>
			<input type="checkbox" checked={obj.isChecked} onChange={handleCheck}/>
			<p className={obj.isChecked ? 'checked' : ''}>{obj.value}</p>
			<button onClick={handleDelete}>Delete</button>
			<EditBtn id={obj.id}/>
		</div>
	);
}

export default ListItem;