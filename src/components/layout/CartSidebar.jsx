import React, { Component } from 'react';

export default class CartSideBar extends Component
{
    constructor(props)
    {
        super(props);
        this.isHidden = true;
    }
    render()
    {
        return (
            <div className="row">
                <div className="col-md-3 cart-sidebar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link">Show cart
                                <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"/>
                            </a>
                        </li>
                    </ul>
                    
                    <table className="table yourCart-table">

                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Qtd</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td>
                                    <img 
                                        src="https://demo.woothemes.com/storefront/wp-content/plugins/woocommerce/assets/images/placeholder.png"
                                        alt="product representation"
                                        width="80" 
                                    />
                                </td>
                                <td>
                                    <input 
                                        type="number" 
                                        name="quantity"
                                        min="1" 
                                        max="100" 
                                        step="1"
                                    />
                                </td>
                                <td>$39.99</td>
                                <td>
                                    <button type="button" className="btn btn-outline-danger btn-sm btn-table-cancel">x</button>
                                </td>
                            </tr>
                                
                        <tr>
                            <td>
                                <img 
                                    src="https://demo.woothemes.com/storefront/wp-content/plugins/woocommerce/assets/images/placeholder.png"
                                    alt="product representation"
                                    width="80"
                                />
                            </td>
                            <td>
                                <input 
                                    type="number" 
                                    name="quantity"
                                    min="1" 
                                    max="100" 
                                    step="1"
                                />
                            </td>

                            <td>$35.99</td>
                            <td>
                                <button type="button" className="btn btn-outline-danger btn-sm btn-table-cancel">x</button>
                            </td>
                        </tr>
                                
                        </tbody>
                     </table>

                     <div className="col mb-3">
                        <h2>Cart Total</h2>

                        <table className="table cartTotal-table">
                            <tbody>
                            <tr>
                                <th scope="row">Total</th>
                                <td>CAD 75.98</td>
                            </tr>
                            </tbody>
                        </table>

                        <button type="button" className="btn btn-success btn-lg btn-block">Proceed to checkout</button>
                    </div>

                </div>
            </div>
        )
    }
}