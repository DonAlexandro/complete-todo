import {SignupFormTypes} from '../../../components/Forms/SigupForm'

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_ERROR = 'SIGNUP_ERROR'

export type SignupResponsePayloadType = string | null

export type SignupRequestType = {
    type: typeof SIGNUP_REQUEST,
    payload: SignupFormTypes
}

export type SignupSuccessType = {
    type: typeof SIGNUP_SUCCESS,
    payload: SignupResponsePayloadType
}

export type SignupErrorType = {
    type: typeof SIGNUP_ERROR,
    payload: SignupResponsePayloadType
}
