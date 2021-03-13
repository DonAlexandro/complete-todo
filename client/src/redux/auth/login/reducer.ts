import {InferActionsTypes} from '@redux/store'
import {actions} from './actions'
import {LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS} from './types'

const initialState = {
    error: null as string | null,
    token: null as string | null,
    userId: null as string | null,
    loading: false
}

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

export const loginReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state, loading: true}
        case LOGIN_SUCCESS:
            const {token, userId} = action.payload

            return {...state, userId, token, loading: false}
        case LOGIN_ERROR:
            return {...state, error: action.payload, loading: false}
        default: return state
    }
}
