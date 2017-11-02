import Data from '../../data.js';
import * as type from '../actions/actionTypes';

const products = Data.products;
const productReducer = (state = products , action) => {
    switch(action.type)
    {
        case type.GET_FLOWERS:
        return {
            ...state.flowers
        }

        case type.DISPLAY_PRODUCT:
            return {
                ...state,
                display: {
                    ...action.product
                }
            }

        case type.GET_PRODUCT:
            return state.flowers.filter( product => product.slug === action.productSlug);
            
        default:
            return state;
    }
}

export default productReducer;