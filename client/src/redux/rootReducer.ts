import {combineReducers} from 'redux'
import {signupReducer} from './auth/signup/reducer'

export const rootReducer = combineReducers({
	signup: signupReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
