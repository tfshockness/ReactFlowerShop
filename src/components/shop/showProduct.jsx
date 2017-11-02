import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { getProduct } from '../../redux/actions/productActions';
import { addToCart } from '../../redux/actions/cart';
import placeholder from '../../assets/placeholder.png';

class showProduct extends Component
{
    addToCart(product)
    {
        this.props.addToCart(product);
    }

    render()
    {
        return (
            <div className="container margin_top_container">
            
                <div className="row">
            
                    <div className="col-md-4">
                        <img src={placeholder} alt="product representation" height="405" width="324" />
                    </div>
            
                    <div className="col-md-7">
                        <p className="detail_product_name">{this.props.product.name} &nbsp; <small className="lead">Code of my Product</small></p>
            
                        <p className="detail_product_price">
                             CAD ${this.props.product.price}
                        </p>
            
                        <div>
                            <p className="detail_product_description">{this.props.product.description}</p>
                        </div>
            
                        <div className="detail_action_block">
                            <input type="text" id="productQnt" className="form-control col-md-1" />
                                <button id="addToCart" className="btn btn-secondary col-md-3" onClick={this.addToCart(this.props.product)}>Add to Cart</button>
                        </div>
                        <hr />
                        <div className="row">
                            <p>Category:&nbsp; {this.props.product.category}</p>
                        </div>
                    </div>
                </div>
                <br />
                <hr />
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="detail_related_products">Related Products</h4>
                    </div>
            
                       <p>List of products from the related categories</p>
            
                </div>
            
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        product: state.products.display
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProduct: productSlug => dispatch(getProduct(productSlug)),
        addToCart: product => dispatch(addToCart(product))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(showProduct);