import {call, put, StrictEffect, takeEvery} from 'redux-saga/effects'
import {signup} from '../../../api/rest/auth'
import {actions} from './actions'
import {SIGNUP_REQUEST, SignupRequestType} from './types'

function* signupSagaWorker(action: SignupRequestType): Generator<StrictEffect> {
	try {
		// todo: change any to something correct
		const data: any = yield call(signup, action.payload)

		yield put(actions.signupSuccess(data.message))
	} catch (e) {
		yield put(actions.signupError(e.message))
	}
}

export function* signupSagaWatcher() {
	yield takeEvery(SIGNUP_REQUEST, signupSagaWorker)
}
