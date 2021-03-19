import {InferActionsTypes} from '../../store'
import {actions} from './actions'
import {
    PASSWORD_REQUEST,
    PASSWORD_SUCCESS,
    RECOVERY_REQUEST,
    RECOVERY_SUCCESS,
    RESPONSE_ERROR,
    TOKEN_REQUEST,
    TOKEN_SUCCESS
} from './types'

const initialState = {
    message: null as string | null,
    error: null as string | null,
    loading: false,
    userId: null as string | null
}

type InitialStateType = typeof initialState
type ActionTypes = InferActionsTypes<typeof actions>

export const recoveryReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case RECOVERY_REQUEST:
            return {...state, loading: true}
        case RECOVERY_SUCCESS:
            return {...state, message: action.payload, loading: false}
        case TOKEN_REQUEST:
            return {...state, loading: true}
        case TOKEN_SUCCESS:
            return {...state, userId: action.payload, loading: false}
        case PASSWORD_REQUEST:
            return {...state, loading: true}
        case PASSWORD_SUCCESS:
            return {...state, message: action.payload, loading: false}
        case RESPONSE_ERROR:
            return {...state, error: action.payload, loading: false}
        default: return state
    }
}
