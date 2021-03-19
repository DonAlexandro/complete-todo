import {call, put, StrictEffect, takeEvery} from 'redux-saga/effects'
import {login} from '../../../api/rest/auth'
import {LOGIN_REQUEST, LoginRequestType} from './types'
import {actions} from './actions'

function* loginSagaWorker(action: LoginRequestType): Generator<StrictEffect> {
    try {
        const data: any = yield call(login, action.payload)

        yield put(actions.loginSuccess(data))
    } catch (e) {
        yield put(actions.loginError(e.message))
    }
}

export function* loginSagaWatcher() {
    yield takeEvery(LOGIN_REQUEST, loginSagaWorker)
}
