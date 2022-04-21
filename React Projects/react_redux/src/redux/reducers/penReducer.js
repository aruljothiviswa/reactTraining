import { B_Pen } from "../actions/actionType"

const initPenState = {
    noOfPen: 35
}

export const penReducer = (state = initPenState, action) => {
    switch (action.type) {
        case B_Pen:
            if (state.noOfPen > 0) {
                return {
                    noOfPen: state.noOfPen - 1
                }
            }else{
                alert("Out Of Stock...")
            }
            break;
        default:
            return state;
    }
}