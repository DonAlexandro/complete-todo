import {combineReducers} from 'redux'
import {signupReducer} from './auth/signup/reducer'
import {confirmReducer} from './auth/confirm/reducer'
import {loginReducer} from './auth/login/reducer'
import {recoveryReducer} from './auth/recovery/reducer'
import {todoReducer} from './todo/reducer'

export const rootReducer = combineReducers({
	signup: signupReducer,
	confirm: confirmReducer,
	login: loginReducer,
	recovery: recoveryReducer,
	todo: todoReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
