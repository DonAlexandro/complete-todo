import {combineReducers} from 'redux'
import {signupReducer} from './auth/signup/reducer'
import {confirmReducer} from './auth/confirm/reducer'

export const rootReducer = combineReducers({
	signup: signupReducer,
	confirm: confirmReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
