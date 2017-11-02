import React from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../../../assets/placeholder.png';

const Product = ({id, name, price, category, slug, add, display}) =>
{
    return (
        <div>
            <div className="col-md-12 text-center">
                <Link to={{
                    pathname: `/product/${slug}`
                }}
                onClick={display}
                >
                    <img src={placeholder} alt="product representation" height="300" width="230" />
                </Link>
                
                <div className="text-center">
                    <Link to={{
                        pathname: `/product/${slug}`
                    }}
                    onClick={display}
                    >
                        <p className="display_product_name">{name}</p>
                    </Link>
                    <p className="display_product_price">CAD {price}</p>
                    <button type="button" className="btn btn-sm add_to_cart_btn" onClick={add}>Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default Product;