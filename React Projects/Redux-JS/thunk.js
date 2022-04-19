const axios = require("axios");
// const redux = require("redux")
// const createStore = redux.createStore;
// const applyMiddleware = redux.applyMiddleware;
const { createStore, applyMiddleware } = require("redux");
const thunkMidWare = require('redux-thunk').default;

const FURequest = "FETCH_USER_REQUSET";
const FUSuccess = "FETCH_USER_SUCCESS";
const FUFailure = "FETCH_USER_FAILURE";

const initianlState = {
    loading: false,
    users: [],
    error: ''
}

const fetchUserRequest = () => {
    return {
        type: FURequest
    }
}

const fetchUserSuccess = (user) => {
    return {
        type: FUSuccess,
        data: user
    }
}

const fetchUserFailure = (err) => {
    return {
        type: FUFailure,
        data: err
    }
}

const reducer = (state = initianlState, action) => {
    switch (action.type) {
        case FURequest:
            return { ...state, loading: true }
        case FUSuccess:
            return { ...state, users: action.data, error: '' }
        case FUFailure:
            return { ...state, users: [], arror: action.data }
    }
}

const fetchUsers = () => {
    return (dispatch) => {
        axios.get('https://625cf8a74c36c753576ca3ef.mockapi.io/userRegistration')
            .then(res => {
                const tempUser = res.data;
                // dispatch(fetchUserRequest)
                   dispatch(fetchUserSuccess(tempUser))
            })
            .catch(err => dispatch(fetchUserFailure(err.message)))
    }
}

const store = createStore(reducer, applyMiddleware(thunkMidWare));
// store.subscribe(() => console.log(store.getState()))
store.subscribe(() => console.log(store.getState()))
store.dispatch(fetchUsers())


