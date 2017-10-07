import { createStore, combineReducers } from 'redux';
import product from './reducers/products';
import cart from './reducers/cart';

const store = createStore(
    combineReducers(
        {
            product,
            cart
        }
    )
);

export default store;