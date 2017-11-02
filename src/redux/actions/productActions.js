import * as type from './actionTypes.js';

export const getProduct = (productSlug) => {
    return {
        type: type.GET_PRODUCT,
        productSlug
    }
}

export const getAllProducts = () => {
    return {
        type: type.GET_ALL_PRODUCTS
    }
}

export const displayProduct = (product) => {
    return {
        type: type.DISPLAY_PRODUCT,
        product
    }
}