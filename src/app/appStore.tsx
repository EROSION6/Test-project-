import { taskApi } from '@/entities/tasks/api/taskApi'
import tasks from '@/entities/tasks/model/taskSlice'
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
	reducer: {
		tasks,
		[taskApi.reducerPath]: taskApi.reducer,
	},
	middleware: getMiddleware => getMiddleware().concat(taskApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Export the hook for usage with Redux Toolkit
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
