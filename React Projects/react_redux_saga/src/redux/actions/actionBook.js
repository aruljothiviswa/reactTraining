import { BUY_BOOK, FETCH_USER_FAILURE, FETCH_USER_SUCCESS, SELL_BOOK } from "./actionTypes";

export const buyBook = () => {
    return {
        type: BUY_BOOK
    }
}

export const sellBook = () => {
    return {
        type: SELL_BOOK
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        data: users
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        data: error
    }
}

