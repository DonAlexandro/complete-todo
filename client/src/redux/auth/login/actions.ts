import {
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LoginDataSuccessType, LoginErrorType,
    LoginRequestType,
    LoginSuccessType
} from './types'
import {LoginFormTypes} from '../../../components/Forms/LoginForm'

export const actions = {
    loginRequest: (body: LoginFormTypes): LoginRequestType => ({
        type: LOGIN_REQUEST,
        payload: body
    }),
    loginSuccess: (data: LoginDataSuccessType): LoginSuccessType => ({
        type: LOGIN_SUCCESS,
        payload: data
    }),
    loginError: (error: string | null): LoginErrorType => ({
        type: LOGIN_ERROR,
        payload: error
    })
}
