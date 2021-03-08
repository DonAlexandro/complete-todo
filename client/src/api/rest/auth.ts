import {request} from '../request'
import {SignupFormTypes} from '@components/Forms/SigupForm'

export const signup = (body: SignupFormTypes) => {
	return request('/api/auth/signup', 'POST', body)
}

export const confirm = (id: string) => {
	return request('/api/auth/confirm', 'POST', {id})
}
