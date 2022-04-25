import { FETCH_USER_FAILURE, FETCH_USER_SUCCESS } from "../actions/actionTypes";

const initialState = {
    loading: false,
    users: [],
    error: ''
}

export const userReducer = (state = initialState, action) => {
    console.log("action11",action)
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return { ...state, users: action.data, error: '', loading: false }
        case FETCH_USER_FAILURE:
            return { ...state, users: [], error: action.data, loading: false }
        default:
            return state;
    }

}