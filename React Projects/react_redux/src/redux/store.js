import { combineReducers, createStore } from 'redux';
import { bookReducer } from './reducers/bookReducer';
import { penReducer } from './reducers/penReducer';
import { mobileReducer } from './reducers/mobileReducer';

const rootReducer = combineReducers({
    books: bookReducer, pens: penReducer, mobiles: mobileReducer
})

export const store = createStore(rootReducer)