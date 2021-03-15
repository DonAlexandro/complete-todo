import {request} from '../request'
import {TodoFormTypes} from '@components/Forms/TodoForm'
import {EditTodoType, TodoType} from '@redux/todo/types'

export const create = (body: TodoFormTypes) => {
    return request<TodoType>('/api/todos/create', 'POST', body)
}

export const fetchTodos = () => {
    return request<TodoType[]>('/api/todos')
}

export const deleteTodo = (id: string) => {
    return request<string>('/api/todos/delete', 'POST', {id})
}

export const editTodo = (todo: EditTodoType) => {
    return request<TodoType>('/api/todos/edit', 'POST', todo)
}