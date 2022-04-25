import createSagaMiddleware from "@redux-saga/core"
import { applyMiddleware, createStore, combineReducers } from "redux"
import { bookReducer } from "./reducers/bookReducer"
import { userReducer } from "./reducers/userReducer"
import { watchBook } from "./sagas/bookSaga"
const sagaMiddleWare = createSagaMiddleware()
const rootReducer = combineReducers({
    books: bookReducer, users: userReducer
})
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare))
sagaMiddleWare.run(watchBook)