import {all, fork, ForkEffect} from 'redux-saga/effects'
import {signupSagaWatcher} from './auth/signup/sagas'
import {confirmSagaWatcher} from './auth/confirm/sagas'
import {loginSagaWatcher} from './auth/login/sagas'
import {passwordSagaWatcher, recoverySagaWatcher, tokenSagaWatcher} from './auth/recovery/sagas'
import {createSagaWatcher, deleteSagaWatcher, editSagaWatcher, fetchSagaWatcher} from './todo/sagas'

export function* rootSaga() {
	yield all([
		fork(signupSagaWatcher),
		fork(confirmSagaWatcher),
		fork(loginSagaWatcher),
		fork(recoverySagaWatcher),
		fork(tokenSagaWatcher),
		fork(passwordSagaWatcher),
		fork(createSagaWatcher),
		fork(fetchSagaWatcher),
		fork(deleteSagaWatcher),
		fork(editSagaWatcher)
	] as ForkEffect[])
}
