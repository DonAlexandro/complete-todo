import {TodoFormTypes} from '@components/Forms/TodoForm'

export const BASE_REQUEST = 'BASE_REQUEST'
export const CREATE_REQUEST = 'CREATE_REQUEST'
export const CREATE_SUCCESS = 'CREATE_SUCCESS'
export const FETCH_REQUEST = 'FETCH_REQUEST'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const DELETE_REQUEST = 'DELETE_REQUEST'
export const DELETE_SUCCESS = 'DELETE_SUCCESS'
export const EDIT_REQUEST = 'EDIT_REQUEST'
export const EDIT_SUCCESS = 'EDIT_SUCCESS'
export const SEARCH_REQUEST = 'SEARCH_REQUEST'
export const ERROR_RESPONSE = 'ERROR_RESPONSE'

export type BaseRequestType = {
    type: typeof BASE_REQUEST
}

export type CreateRequestType = {
    type: typeof CREATE_REQUEST,
    payload: TodoFormTypes
}

export type ErrorResponseType = {
    type: typeof ERROR_RESPONSE,
    payload: string | null
}

export type TodoType = {
    _id: string,
    title: string,
    done: boolean,
    date: Date
}

export type CreateSuccessType = {
    type: typeof CREATE_SUCCESS,
    payload: TodoType
}

export type FetchRequestType = {
    type: typeof FETCH_REQUEST,
    payload: number
}

export type FetchSuccessPayloadType = {
    todos: TodoType[],
    todosCount: number
}

export type FetchSuccessType = {
    type: typeof FETCH_SUCCESS,
    payload: FetchSuccessPayloadType
}

export type DeleteRequestType = {
    type: typeof DELETE_REQUEST,
    payload: string
}

export type DeleteSuccessType = {
    type: typeof DELETE_SUCCESS,
    payload: string
}

export type EditTodoType = {
    id: string,
    title?: string,
    done?: boolean
}

export type EditRequestType = {
    type: typeof EDIT_REQUEST,
    payload: EditTodoType
}

export type EditSuccessType = {
    type: typeof EDIT_SUCCESS,
    payload: TodoType
}

export type SearchRequestType = {
    type: typeof SEARCH_REQUEST,
    payload: string
}
