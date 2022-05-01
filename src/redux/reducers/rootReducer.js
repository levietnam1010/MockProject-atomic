import carts from "./cartReducer";

import { combineReducers } from "redux";


const rootReducers = combineReducers({
    cart: carts,
})

export default rootReducers