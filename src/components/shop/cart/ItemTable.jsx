import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductTableRow from './ProductTableRow';
import { removeFromCart } from '../../../redux/actions/cart';

class ItemTable extends Component
{
    removeItem(id)
    {
        this.props.removeItem(id);

    }
    changeQuantity(quantity)
    {
        this.props.changeQuantity(quantity);
    }
    render()
    {
        return (
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
                                {this.props.items.map((item) => <ProductTableRow 
                                    key={item.id} 
                                    delete={() => this.removeItem(item.id)} 
                                    {...item}  
                                    /> )}                        
                            </tbody>
                        </table>
        )
    }
}

const mapStateToProps = (state, props) => { 
    return {
        items: state.cart.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: id => dispatch(removeFromCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemTable);
//export default connect(mapStateToProps, {removeItem: removeFromCart})(ItemTable); Another possibility
//If the parameter is the same in the dispatch function, you can pass a object instead of create a mapDispatchToProps function
