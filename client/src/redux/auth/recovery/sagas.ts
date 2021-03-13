import {call, put, StrictEffect, takeEvery} from 'redux-saga/effects'
import {
    PASSWORD_REQUEST,
    PasswordRequestType,
    RECOVERY_REQUEST,
    RecoveryRequestType,
    TOKEN_REQUEST,
    TokenRequestType
} from './types'
import {actions} from './actions'
import {password, recovery, token} from '../../../api/rest/auth'

function* recoverySagaWorker(action: RecoveryRequestType): Generator<StrictEffect> {
    try {
        const data: any = yield call(recovery, action.payload)

        yield put(actions.recoverySuccess(data.message))
    } catch (e) {
        yield put(actions.responseError(e.message))
    }
}

function* tokenSagaWorker(action: TokenRequestType): Generator<StrictEffect> {
    try {
        const data: any = yield call(token, action.payload)

        yield put(actions.tokenSuccess(data.userId))
    } catch (e) {
        yield put(actions.responseError(e.message))
    }
}

function* passwordSagaWorker(action: PasswordRequestType): Generator<StrictEffect> {
    try {
        const data: any = yield call(password, action.payload)

        yield put(actions.passwordSuccess(data.message))
    } catch (e) {
        yield put(actions.responseError(e.message))
    }
}

export function* recoverySagaWatcher() {
    yield takeEvery(RECOVERY_REQUEST, recoverySagaWorker)
}

export function* tokenSagaWatcher() {
    yield takeEvery(TOKEN_REQUEST, tokenSagaWorker)
}

export function* passwordSagaWatcher() {
    yield takeEvery(PASSWORD_REQUEST, passwordSagaWorker)
}
