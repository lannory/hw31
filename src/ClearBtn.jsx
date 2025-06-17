import React from 'react';
import { useDispatch } from 'react-redux';
import { clearTasks } from './store/todoSlice';

function ClearBtn(props) {

	const dispatch = useDispatch();

	const handleClear = () =>{
		dispatch(clearTasks());
	}

	return (
		<button onClick={handleClear}>
			clear
		</button>
	);
}

export default ClearBtn;