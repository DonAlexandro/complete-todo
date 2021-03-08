import {request} from '../request'
import {SignupFormTypes} from '@components/Forms/SigupForm'

export const signup = (body: SignupFormTypes) => {
	return request(
		'/api/auth/signup',
		'POST',
		body
	)
}
