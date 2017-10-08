import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductTableRowSidebar from './ProductTableRowSidebar';


class CartSideBar extends Component
{
    constructor(props)
    {
        super(props);
        this.isHidden = true;
    }
    render()
    {
        return (
            <div className="row none">
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
                            { this.props.items.map((item) => <ProductTableRowSidebar key={item.id} {...item} /> )}    
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

const mapStateToProps = (state) =>
{
    return {
        items: state.cart.products
    }
}

export default connect(mapStateToProps)(CartSideBar);