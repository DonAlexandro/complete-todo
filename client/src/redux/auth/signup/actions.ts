import {
	SIGNUP_ERROR,
	SIGNUP_REQUEST,
	SIGNUP_SUCCESS,
	SignupRequestType,
	SignupSuccessType,
	SignupErrorType,
	SignupResponsePayloadType
} from './types'
import {SignupFormTypes} from '../../../components/Forms/SigupForm'

export const actions = {
	signupRequest: (body: SignupFormTypes): SignupRequestType => ({
		type: SIGNUP_REQUEST,
		payload: body
	}),
	signupSuccess: (message: SignupResponsePayloadType): SignupSuccessType => ({
		type: SIGNUP_SUCCESS,
		payload: message
	}),
	signupError: (error: SignupResponsePayloadType): SignupErrorType => ({
		type: SIGNUP_ERROR,
		payload: error
	})
}
