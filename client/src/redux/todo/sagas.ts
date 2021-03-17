import {StrictEffect, put, call, takeEvery} from 'redux-saga/effects'
import {actions} from './actions'
import {
    CREATE_REQUEST,
    CreateRequestType,
    DELETE_REQUEST,
    DeleteRequestType, EDIT_REQUEST,
    EditRequestType,
    FETCH_REQUEST, FetchRequestType
} from './types'
import {create, deleteTodo, editTodo, fetchTodos} from '../../api/rest/todo'

function* createSagaWorker(action: CreateRequestType): Generator<StrictEffect> {
    yield put(actions.baseRequest())

    try {
        const data: any = yield call(create, action.payload)

        yield put(actions.createSuccess(data.todo))
    } catch (e) {
        yield put(actions.errorResponse(e.message))
    }
}

function* fetchSagaWorker(action: FetchRequestType): Generator<StrictEffect> {
    yield put(actions.baseRequest())

    try {
        const data: any = yield call(fetchTodos, action.payload)

        yield put(actions.fetchSuccess(data))
    } catch (e) {
        yield put(actions.errorResponse(e.message))
    }
}

function* deleteSagaWorker(action: DeleteRequestType): Generator<StrictEffect> {
    yield put(actions.baseRequest())

    try {
        const data: any = yield call(deleteTodo, action.payload)

        yield put(actions.deleteSuccess(data.id))
    } catch (e) {
        yield put(actions.errorResponse(e.message))
    }
}

function* editSagaWorker(action: EditRequestType): Generator<StrictEffect> {
    yield put(actions.baseRequest())

    try {
        const data: any = yield call(editTodo, action.payload)

        yield put(actions.editSuccess(data.todo))
    } catch (e) {
        yield put(actions.errorResponse(e.message))
    }
}

export function* createSagaWatcher() {
    yield takeEvery(CREATE_REQUEST, createSagaWorker)
}

export function* fetchSagaWatcher() {
    yield takeEvery(FETCH_REQUEST, fetchSagaWorker)
}

export function* deleteSagaWatcher() {
    yield takeEvery(DELETE_REQUEST, deleteSagaWorker)
}

export function* editSagaWatcher() {
    yield takeEvery(EDIT_REQUEST, editSagaWorker)
}
