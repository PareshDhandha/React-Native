// import { configureStore } from "@reduxjs/toolkit";
// import ProductSlice from "../Slices/ProductSlice";

// export const store = configureStore({
//     reducer : {
//         product: ProductSlice
//     }
// });
import { combineReducers, createStore } from "redux";
import { CartReducer } from "../Reducers/CartReducer";

const routeReducer = combineReducers({
    CartReducer,
});

export const store = createStore(routeReducer);
