import { B_book, B_Mobile, B_Pen } from "./actionType"

export const buyBook = () => {
    return {
        type: B_book
    }
}

export const buyPen = () => {
    return {
        type: B_Pen
    }
}

export const buyMobile = () => {
    return {
        type: B_Mobile
    }
}


