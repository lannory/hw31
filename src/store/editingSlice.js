import { createSlice } from "@reduxjs/toolkit";

const initialState = {isEditing: false, elId: null};

const editingSlice = createSlice({
	initialState,
	name: 'editing',
	reducers: {
		toggleEdit: (state, action) => {
			state.id = state.isEditing ? null : action.payload;
			state.isEditing = !state.isEditing;
			return state;
		}
	}
})

export const {toggleEdit} = editingSlice.actions;

export default editingSlice.reducer;