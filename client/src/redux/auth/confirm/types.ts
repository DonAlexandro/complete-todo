export const CONFIRM_REQUEST = 'CONFIRM_REQUEST'
export const CONFIRM_SUCCESS = 'CONFIRM_SUCCESS'
export const CONFIRM_ERROR = 'CONFIRM_ERROR'

export type ConfirmRequestType = {
    type: typeof CONFIRM_REQUEST,
    payload: string
}

export type ConfirmSuccessType = {
    type: typeof CONFIRM_SUCCESS,
    payload: string | null
}

export type ConfirmErrorType = {
    type: typeof CONFIRM_ERROR,
    payload: string | null
}
