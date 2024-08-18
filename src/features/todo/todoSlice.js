import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
	todos: [],
}

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			id: nanoid(),
			text: action.payload,

		}
		state.todos.push(todo)
	},
})
