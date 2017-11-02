import * as type from './actionTypes.js';
//ADD
//REMOVE
//CALCULATE_TOTAL

export const removeFromCart = (productId) => {
    return {
        type: type.REMOVE_FROM_CART,
        productId
    }
}

export const addToCart = (product) => {
    return{
        type: type.ADD_TO_CART, 
        product
    }
}
