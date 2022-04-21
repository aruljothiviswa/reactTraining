import { B_Mobile } from "../actions/actionType"

const initMobileState = {
    noOfMobile: 10
}

export const mobileReducer = (state = initMobileState, action) => {
    switch (action.type) {
        case B_Mobile:
            if (state.noOfMobile > 0) {
                return {
                    noOfMobile: state.noOfMobile - 1
                }
            }else{
                alert("Out Of Stock...")
            }
            break;
        default:
            return state;
    }
}