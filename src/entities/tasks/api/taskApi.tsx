import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITasks } from '../model/types'

let BASE_URL = 'placeholder.typicode.com'

export const taskApi = createApi({
	reducerPath: 'taskApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: build => {
		getTasks: build.query<ITasks, null>({
			query: () => '/todos',
		})
	},
})

export const { useGetTasksQuery } = taskApi
