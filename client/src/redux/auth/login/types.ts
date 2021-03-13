import {LoginFormTypes} from '@components/Forms/LoginForm'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export type LoginRequestType = {
    type: typeof LOGIN_REQUEST,
    payload: LoginFormTypes
}

export type LoginDataSuccessType = {
    userId: string | null,
    token: string | null
}

export type LoginSuccessType = {
    type: typeof LOGIN_SUCCESS,
    payload: LoginDataSuccessType
}

export type LoginErrorType = {
    type: typeof LOGIN_ERROR,
    payload: string | null
}
