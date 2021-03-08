import {all, fork} from 'redux-saga/effects'
import {signupSagaWatcher} from './auth/signup/sagas'
import {confirmSagaWatcher} from './auth/confirm/sagas'

export function* rootSaga(): Generator {
	yield all([
		fork(signupSagaWatcher),
		fork(confirmSagaWatcher)
	])
}
