import data from '../../data.js';
import * as type from '../actions/actionTypes';

const cart = data.cart;

const cartReducer = (state = cart, action) => 
{
    switch(action.type)
    {
        case type.ADD_TO_CART:
        if(!state.products.find(product => product.id === action.product.id) ){
            return {
                ...state,
                products: [...state.products, 
                    {
                        ...action.product,
                        quantity: 1
                    }]
            }
        }else{
            let product = state.products.find( product => product.id === action.product.id);
            state.products.splice(state.products.indexOf(product), 1);
            return{
                ...state,
                products:[ 
                    ...state.products,
                    {
                        ...product,
                        quantity: product.quantity + 1
                    }
                ]
            };
        }
        
        case type.REMOVE_FROM_CART:
        console.log('Remove Reducer', action.productId);
            return {
                ...state,
                products: state.products.filter( (product) => product.id !== action.productId )
            };
            
        default:
            return state;
    }
}

export default cartReducer;
