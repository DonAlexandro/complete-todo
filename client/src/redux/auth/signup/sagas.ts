import {call, put, StrictEffect, takeEvery} from 'redux-saga/effects'
import {signup} from '../../../api/rest/auth'
import {actions} from './actions'
import {SIGNUP_REQUEST, SignupRequestType} from './types'

function* signupSagaWorker(action: SignupRequestType): Generator<StrictEffect> {
	try {
		const data: any = yield call(signup, action.payload)

		console.log(data)

		yield put(actions.signupSuccess(data.message))
	} catch (e) {
		yield put(actions.signupError(e.message))
	}
}

export function* signupSagaWatcher() {
	yield takeEvery(SIGNUP_REQUEST, signupSagaWorker)
}
