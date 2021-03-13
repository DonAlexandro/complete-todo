import {
    CONFIRM_ERROR,
    CONFIRM_REQUEST,
    CONFIRM_SUCCESS,
    ConfirmErrorType,
    ConfirmRequestType,
    ConfirmSuccessType
} from './types'

export const actions = {
    confirmRequest: (id: string): ConfirmRequestType => ({
        type: CONFIRM_REQUEST,
        payload: id
    }),
    confirmSuccess: (message: string | null): ConfirmSuccessType => ({
        type: CONFIRM_SUCCESS,
        payload: message
    }),
    confirmError: (error: string | null): ConfirmErrorType => ({
        type: CONFIRM_ERROR,
        payload: error
    })
}
