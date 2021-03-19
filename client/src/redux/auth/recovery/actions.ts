import {RecoveryFormTypes} from '../../../components/Forms/RecoveryForm'
import {
    PASSWORD_REQUEST,
    PASSWORD_SUCCESS, PasswordBodyTypes,
    PasswordRequestType,
    PasswordSuccessType,
    RECOVERY_REQUEST,
    RECOVERY_SUCCESS,
    RecoveryRequestType,
    RecoverySuccessType,
    RESPONSE_ERROR,
    ResponseErrorType,
    TOKEN_REQUEST,
    TOKEN_SUCCESS,
    TokenRequestType,
    TokenSuccessType
} from './types'

export const actions = {
    recoveryRequest: (body: RecoveryFormTypes): RecoveryRequestType => ({
        type: RECOVERY_REQUEST,
        payload: body
    }),
    recoverySuccess: (message: string | null): RecoverySuccessType => ({
        type: RECOVERY_SUCCESS,
        payload: message
    }),
    tokenRequest: (token: string | null): TokenRequestType => ({
        type: TOKEN_REQUEST,
        payload: token
    }),
    tokenSuccess: (id: string): TokenSuccessType => ({
        type: TOKEN_SUCCESS,
        payload: id
    }),
    passwordRequest: (body: PasswordBodyTypes): PasswordRequestType => ({
        type: PASSWORD_REQUEST,
        payload: body
    }),
    passwordSuccess: (message: string | null): PasswordSuccessType => ({
        type: PASSWORD_SUCCESS,
        payload: message
    }),
    responseError: (error: string | null): ResponseErrorType => ({
        type: RESPONSE_ERROR,
        payload: error
    })
}