import { userReducer } from "./reducers/userReducer";
import { combineReducers, createStore } from 'redux';

const { applyMiddleware } = require("redux");
const thunkMidWare = require('redux-thunk').default;
// const rootReducer = combineReducers({
//     users:userReducer
// })
export const storeUser = createStore(userReducer, applyMiddleware(thunkMidWare));