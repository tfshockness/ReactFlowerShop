import React from 'react';
import { connect } from 'react-redux';
import ProductTableRow from './ProductTableRow';

const ItemTable = (props) => (
    <table className="table yourCart-table">

                <thead>
                    <tr>
                        <th>ITEM</th>
                        <th></th>
                        <th>QTD</th>
                        <th>PRICE</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {props.items.map((item) => <ProductTableRow key={item.id} {...item} /> )}                        
                </tbody>
            </table>
);

const mapStateToProps = (state) => { 
    return {
        items: state.cart.products 
        }
}

export default connect(mapStateToProps)(ItemTable);