import {request} from '../request'
import {TodoFormTypes} from '../../components/Forms/TodoForm'
import {EditTodoType, TodoType} from '../../redux/todo/types'

export const create = (body: TodoFormTypes) => {
    return request<TodoType>('/api/todos/create', 'POST', body, {authorization: true})
}

export const fetchTodos = (page: number) => {
    return request<TodoType[]>(
        `/api/todos?page=${page}`,
        'GET',
        null,
        {authorization: true}
    )
}

export const deleteTodo = (id: string) => {
    return request<string>('/api/todos/delete', 'POST', {id}, {authorization: true})
}

export const editTodo = (todo: EditTodoType) => {
    return request<TodoType>('/api/todos/edit', 'POST', todo, {authorization: true})
}
