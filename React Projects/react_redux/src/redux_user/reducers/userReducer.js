import { FUFailure, FURequest, FUSuccess } from "../actions/actionType"

const initialState = {
    loading: false,
    users: [],
    error: ''
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FURequest:
            return { ...state, loading: true }
        case FUSuccess:
            return { ...state, users: action.data, error: '', loading: false }
        case FUFailure:
            return { ...state, users: [], error: action.data, loading: false }
        default:
            return state;
    }

}