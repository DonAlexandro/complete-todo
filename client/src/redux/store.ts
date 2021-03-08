import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {rootReducer} from './rootReducer'
import {rootSaga} from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export const store = createStore(rootReducer, compose(
	applyMiddleware(sagaMiddleware),
	// @ts-ignore
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
))

sagaMiddleware.run(rootSaga)
