import {all, fork} from 'redux-saga/effects'
import {signupSagaWatcher} from './auth/signup/sagas'

export function* rootSaga(): Generator {
	yield all([fork(signupSagaWatcher)])
}
