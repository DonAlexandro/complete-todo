import {InferActionsTypes} from '../../store'
import {actions} from './actions'
import {SIGNUP_REQUEST, SIGNUP_ERROR, SIGNUP_SUCCESS} from './types'

const initialState = {
	message: null as string | null,
	error: null as string | null,
	loading: false
}

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

export const signupReducer = (state = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case SIGNUP_REQUEST:
			return {...state, loading: true}
		case SIGNUP_SUCCESS:
			return {...state, message: action.payload, loading: false}
		case SIGNUP_ERROR:
			return {...state, error: action.payload, loading: false}
		default: return state
	}
}
