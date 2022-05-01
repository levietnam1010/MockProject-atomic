
import { createStore } from "@reduxjs/toolkit";
import rootReducers from "../reducers/rootReducer";



const store = createStore(rootReducers)


export default store;