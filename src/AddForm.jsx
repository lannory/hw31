
import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTask, editTask } from './store/todoSlice';
import { toggleEdit } from './store/editingSlice';

function AddForm() {

	const taskRef = useRef()

	const dispatch = useDispatch();

	const editEl = useSelector(state => state.editing);
	const tasks = useSelector(state => state.todo);
	const taskIndex = tasks.findIndex(i => i.id === editEl.id)
	const task = tasks[taskIndex];


	const handleSubmit = (e) =>{
		e.preventDefault();
		if(editEl.isEditing){
			dispatch(editTask({id: editEl.id, newValue: taskRef.current.value}))
			dispatch(toggleEdit());
			
		}else{
			dispatch(addNewTask(taskRef.current.value));
		}
		taskRef.current.value = '';
	}



	return (
		<form>
			<input type="text" placeholder='enter task' ref={taskRef} defaultValue={editEl.isEditing ? task.value : ''}/>

			<button onClick={(e) => handleSubmit(e)}>{editEl.isEditing ? 'edit' : 'add'}</button>
		</form>
	);
}

export default AddForm;