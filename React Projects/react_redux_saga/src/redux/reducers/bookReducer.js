import { BUY_BOOK_SUCCESS, SELL_BOOK_SUCCESS } from "../actions/actionTypes"
const initialBookState = {
    numOfBooks: 100
}
export const bookReducer = (state = initialBookState, action) => {
    switch (action.type) {
        case BUY_BOOK_SUCCESS:
            return { numOfBooks: state.numOfBooks - 1 }
        case SELL_BOOK_SUCCESS:
            return { numOfBooks: state.numOfBooks + 1 }
        default:
            return state
    }
}

