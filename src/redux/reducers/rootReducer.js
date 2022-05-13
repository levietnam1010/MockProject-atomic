import carts from "./cartReducer";
import addressUsers from "./AddressUserReducer";
import { combineReducers } from "redux";


const rootReducers = combineReducers({
    cart: carts,
    address: addressUsers
})

export default rootReducers