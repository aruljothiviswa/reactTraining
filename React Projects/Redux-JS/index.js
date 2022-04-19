const { combineReducers, createStore } = require("redux");

const b_book = "BUY_BOOK";
const b_pen = "BUY_PEN";
const b_mobile = "BUY_Mobile";

const InitialBookState = {
    noOfBooks: 20
}

const initialPenStete = {
    noOfPens: 50
}

const initialMobileState = {
    noOfMobiles: 10
}

const buyBook = () => {
    return { type: b_book }
}

const buyPen = () => {
    return { type: b_pen }
}
const buyMobile = () => {
    return { type: b_mobile }
}

const bookReducer = (state = InitialBookState, action) => {
    switch (action.type) {
        case b_book:
            return {
                noOfBooks: state.noOfBooks - 1
            }
        default:
            return state;
    }

}

const penReducer = (state = initialPenStete, action) => {
    switch (action.type) {
        case b_pen: {
            return { noOfPens: state.noOfPens - 1 }
        }
        default:
            return state;
    }
}

const mobilReducer = (state = initialMobileState, action) => {
    switch (action.type) {
        case b_mobile:
            return { noOfMobiles: state.noOfMobiles - 1 }
        default:
            return state;
    }
}

const rootReducer = combineReducers({ Book: bookReducer, Pen: penReducer, Mobile: mobilReducer });
const store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()))
store.dispatch(buyBook())
store.dispatch(buyPen())
store.dispatch(buyMobile())