import React from 'react';

const ProductTableRow = ({id, name, price, quantity}) => (
        <tr>
            <td>
                <img 
                    src="https://demo.woothemes.com/storefront/wp-content/plugins/woocommerce/assets/images/placeholder.png"
                    alt="product representation" 
                    width="80" 
                />
            </td>
            <td>{name}</td>
            <td>
                <input 
                    type="number" 
                    name="quantity"
                    min="1" 
                    max="100" 
                    step="1"
                />
            </td>
            <td>${price}</td>
            <td>
                <button type="button" className="btn btn-outline-danger btn-sm btn-table-cancel">x</button>
            </td>
        </tr>
)

export default ProductTableRow;