import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleEdit } from './store/editingSlice';


function EditBtn({id}) {

	const dispatch = useDispatch();


	const handleEdit = () =>{
		dispatch(toggleEdit(id));
	}

	return (
		<button onClick={handleEdit}>
			Edit
		</button>
	);
}

export default EditBtn;