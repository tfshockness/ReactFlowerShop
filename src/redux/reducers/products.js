import { flowers } from '../../data.js';

const productReducer = (state = flowers , action) => {
    switch(action.type)
    {
        default:
            return state;
    }
}

export default productReducer;