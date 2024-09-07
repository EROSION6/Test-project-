import { createSlice } from '@reduxjs/toolkit'
import { TasksState } from './types'

const initialState: TasksState = {
	tasks: [],
}

export const taskSlice = createSlice({
	name: 'tasks',
	initialState: initialState,
	reducers: {
		addTask: (state, action) => {
			state.tasks.push(action.payload)
		},
		deleteTask: (state, action) => {
			state.tasks = state.tasks.filter(task => task.id !== action.payload)
		},
	},
})

export const { addTask, deleteTask } = taskSlice.actions

export default taskSlice.reducer
