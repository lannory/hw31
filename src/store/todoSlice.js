import {createSlice} from '@reduxjs/toolkit';


const initialState = JSON.parse(localStorage.getItem('todos')) || [{id: 1, value: 'test', isChecked: false}];

const todoSlice = createSlice({
	initialState,
	name: 'todo',
	reducers: {
		addNewTask: (state, action) =>{
			const newTask = {id: Date.now(), value: action.payload, isChecked: false}
			state.push(newTask);
			localStorage.setItem("todos", JSON.stringify(state));
			return state;
		},
		deleteTask: (state, action)=>{
			const index = state.findIndex(i=> i.id === action.payload);
			state.splice(index, 1);
			localStorage.setItem("todos", JSON.stringify(state));
			return state;
		},
		checkTask: (state, action) =>{
			const index = state.findIndex(i=> i.id === action.payload);
			state[index].isChecked = !(state[index].isChecked);
			localStorage.setItem("todos", JSON.stringify(state));
			return state;
		},
		editTask: (state, action) =>{
			const {id, newValue} = action.payload;
			const index = state.findIndex(i=> i.id === id);
			state[index].value = newValue;
			localStorage.setItem("todos", JSON.stringify(state));
			return state
		},
		clearTasks: (state, action) => {
			state = [];
			return state;
		}
	}
});

export const {addNewTask, deleteTask, checkTask, clearTasks, editTask} = todoSlice.actions;

export default todoSlice.reducer;