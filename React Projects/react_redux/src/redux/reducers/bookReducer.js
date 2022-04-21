import { B_book } from "../actions/actionType"

const initBookState = {
    noOfBooks: 50
}

export const bookReducer = (state = initBookState, action) => {
    switch (action.type) {
        case B_book:
            if (state.noOfBooks > 0) {
                return { noOfBooks: state.noOfBooks - 1 }
            }else{
                alert("Out Of Stock...")
            }
            break;
        default:
            return state;
    }
}