import { createStore, combineReducers } from 'redux';
import products from './reducers/products';
import cart from './reducers/cart';


const store = createStore(
    combineReducers(
        {
            products,
            cart
        }
    )
);

export default store;