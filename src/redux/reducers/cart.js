import { cart } from '../../data.js';

const cartReducer = (state = cart, action) => 
{
    switch(action.type)
    {
        default:
            return state;
    }
}

export default cartReducer;
