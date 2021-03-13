import {all, fork} from 'redux-saga/effects'
import {signupSagaWatcher} from './auth/signup/sagas'
import {confirmSagaWatcher} from './auth/confirm/sagas'
import {loginSagaWatcher} from './auth/login/sagas'
import {passwordSagaWatcher, recoverySagaWatcher, tokenSagaWatcher} from './auth/recovery/sagas'

export function* rootSaga(): Generator {
	yield all([
		fork(signupSagaWatcher),
		fork(confirmSagaWatcher),
		fork(loginSagaWatcher),
		fork(recoverySagaWatcher),
		fork(tokenSagaWatcher),
		fork(passwordSagaWatcher)
	])
}
