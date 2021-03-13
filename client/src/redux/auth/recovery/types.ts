import {RecoveryFormTypes} from '@components/Forms/RecoveryForm'
import {PasswordFormTypes} from '@components/Forms/PasswordForm'

export const RECOVERY_REQUEST = 'RECOVERY_REQUEST'
export const RECOVERY_SUCCESS = 'RECOVERY_SUCCESS'
export const TOKEN_REQUEST = 'TOKEN_REQUEST'
export const TOKEN_SUCCESS = 'TOKEN_SUCCESS'
export const PASSWORD_REQUEST = 'PASSWORD_REQUEST'
export const PASSWORD_SUCCESS = 'PASSWORD_SUCCESS'
export const RESPONSE_ERROR = 'RESPONSE_ERROR'

export type RecoveryRequestType = {
    type: typeof RECOVERY_REQUEST,
    payload: RecoveryFormTypes
}

export type RecoverySuccessType = {
    type: typeof RECOVERY_SUCCESS,
    payload: string | null
}

export type ResponseErrorType = {
    type: typeof RESPONSE_ERROR,
    payload: string | null
}

export type TokenRequestType = {
    type: typeof TOKEN_REQUEST,
    payload: string | null
}

export type TokenSuccessType = {
    type: typeof TOKEN_SUCCESS,
    payload: string
}

export type PasswordBodyTypes = PasswordFormTypes & {userId: string | null, token: string | null}

export type PasswordRequestType = {
    type: typeof PASSWORD_REQUEST,
    payload: PasswordBodyTypes
}

export type PasswordSuccessType = {
    type: typeof PASSWORD_SUCCESS,
    payload: string | null
}
