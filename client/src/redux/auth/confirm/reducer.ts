import {actions} from './actions'
import {InferActionsTypes} from '../../../redux/store'
import {CONFIRM_ERROR, CONFIRM_REQUEST, CONFIRM_SUCCESS} from '../../../redux/auth/confirm/types'

const initialState = {
    loading: false,
    message: null as string | null,
    error: null as string | null
}

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

export const confirmReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case CONFIRM_REQUEST:
            return {...state, loading: true}
        case CONFIRM_SUCCESS:
            return {...state, loading: false, message: action.payload}
        case CONFIRM_ERROR:
            return {...state, loading: false, error: action.payload}
        default: return state
    }
}
