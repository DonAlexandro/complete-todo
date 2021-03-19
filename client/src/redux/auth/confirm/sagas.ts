import {takeEvery, call, put, StrictEffect} from 'redux-saga/effects'
import {CONFIRM_REQUEST, ConfirmRequestType} from './types'
import {actions} from './actions'
import {confirm} from '../../../api/rest/auth'

function* confirmSagaWorker(action: ConfirmRequestType): Generator<StrictEffect> {
    try {
        const data: any = yield call(confirm, action.payload)

        yield put(actions.confirmSuccess(data.message))
    } catch (e) {
        yield put(actions.confirmError(e.message))
    }
}

export function* confirmSagaWatcher() {
    yield takeEvery(CONFIRM_REQUEST, confirmSagaWorker)
}
