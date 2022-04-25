import { put, all, takeLatest,takeEvery, delay } from 'redux-saga/effects'
import { call } from 'redux-saga/effects'
import axios from 'axios'

import { BUY_BOOK, BUY_BOOK_SUCCESS, FETCH_USER_SUCCESS, SELL_BOOK, SELL_BOOK_SUCCESS } from '../actions/actionTypes'
export function* watchBook() {
    // yield all([takeLatest(BUY_BOOK, buyBookFromHcl), takeLatest(SELL_BOOK, sellBookFromHcl)])
    yield all([takeLatest(BUY_BOOK, buyBookFromHcl), takeLatest(SELL_BOOK, sellBookFromHcl),
    takeEvery(FETCH_USER_SUCCESS, fetchUsers)])
}
function* buyBookFromHcl() {
    yield delay(3000)
    yield put({ type: BUY_BOOK_SUCCESS })
}
function* sellBookFromHcl() {
    yield delay(3000)
    yield put({ type: SELL_BOOK_SUCCESS })
}

function* fetchUsers() {
    try {
        // yield delay(3000)
        let users = yield call(axios.get, 'https://625cf8a74c36c753576ca3ef.mockapi.io/userRegistration')
        yield put({ type: 'FETCH_USERS_SUCCESS', data: users.data })
    }
    catch (error) {
        yield put({ type: 'FETCH_USERS_FAILURE', data: error.message })
    }
}
