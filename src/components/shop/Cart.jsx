import React from 'react';
import ItemTable from './cart/ItemTable';
import AddonsList from './cart/AddonsList';

const Cart = () =>
{
    return (
        <div className="container">
            <h1>Your Cart</h1>
            <ItemTable />
            <h2>Add-ons</h2>
            
            <div>
                <AddonsList />

                <div className="row">

                    <div className="col">
                        <h2>Message</h2>

                        <div className="form-group">
                            <label htmlFor="messageTextarea">Enter the message (max 150 characters)</label>
                            <textarea className="form-control" id="messageTextarea" rows="3" maxLength="150"></textarea>
                        </div>

                    </div>

                    <div className="col">
                        <h2>Cart Totals</h2>

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
        </div>
    );
}


export default Cart;