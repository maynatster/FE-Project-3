import { applyMiddleware, combineReducers, createStore } from "redux";
import { categoryReducer } from "./reducers/categoryReducer";
import { productsReducer } from "./reducers/productsReducer";
import thunk from 'redux-thunk';
import { basketReducer } from "./reducers/basketReducer";

const rootReducer = combineReducers({
    category: categoryReducer,
    products: productsReducer,
    basket: basketReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))