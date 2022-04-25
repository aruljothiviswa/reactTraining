import axios from "axios"
import { FUFailure, FURequest, FUSuccess } from "./actionType"

export const fetchUserRequest = () => {
    return {
        type: FURequest
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: FUSuccess,
        data: users
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: FUFailure,
        data: error
    }
}

export const fetchUsers = () => {
    console.log("getdata")
    return (dispatch) => {
        axios.get('https://625cf8a74c36c753576ca3ef.mockapi.io/userRegistration')
            .then(res => {
                const tempUser = res.data;
                dispatch(fetchUserSuccess(tempUser))
            })
            .catch(err => dispatch(fetchUserFailure(err.message)))
    }
}

export const addUsers = (data) => {
    return (dispatch) => {
        axios.post('https://625cf8a74c36c753576ca3ef.mockapi.io/userRegistration', data)
            .then(() => axios.get('https://625cf8a74c36c753576ca3ef.mockapi.io/userRegistration')
                .then(res => {
                    const tempUser = res.data;
                    dispatch(fetchUserSuccess(tempUser))
                }))
    }
}

export const updateUsers = (data, id) => {
    return (dispatch) => {
        axios.put('https://625cf8a74c36c753576ca3ef.mockapi.io/userRegistration/' + id, data)
            .then(() => axios.get('https://625cf8a74c36c753576ca3ef.mockapi.io/userRegistration')
                .then(res => {
                    const tempUser = res.data;
                    dispatch(fetchUserSuccess(tempUser))
                }))
    }
}

export const deleteUsers = (id) => {
    return (dispatch) => {
        axios.delete('https://625cf8a74c36c753576ca3ef.mockapi.io/userRegistration/' + id)
            .then(() => axios.get('https://625cf8a74c36c753576ca3ef.mockapi.io/userRegistration')
                .then(res => {
                    const tempUser = res.data;
                    dispatch(fetchUserSuccess(tempUser))
                }))
    }
}