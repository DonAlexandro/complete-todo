import {request} from '../request'
import {SignupFormTypes} from '@components/Forms/SigupForm'
import {LoginFormTypes} from '@components/Forms/LoginForm'
import {BaseResponseType} from '../types'
import {RecoveryFormTypes} from '@components/Forms/RecoveryForm'
import {PasswordBodyTypes} from "@redux/auth/recovery/types";

export const signup = (body: SignupFormTypes) => {
	return request<BaseResponseType>('/api/auth/signup', 'POST', body)
}

export const confirm = (id: string) => {
	return request<BaseResponseType>('/api/auth/confirm', 'POST', {id})
}

export const login = (body: LoginFormTypes) => {
	return request<any>('/api/auth/login', 'POST', body)
}

export const recovery = (body: RecoveryFormTypes) => {
	return request<BaseResponseType>('/api/auth/recovery', 'POST', body)
}

export const token = (token: string | null) => {
	return request<any>(`/api/auth/password/${token}`)
}

export const password = (body: PasswordBodyTypes) => {
	return request<BaseResponseType>(`/api/auth/password`, 'POST', body)
}
