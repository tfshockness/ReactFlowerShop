import React, {Component} from 'react';
import { connect } from 'react-redux';
import Jumbotron from './home/Jumbotron'
import Product from './shared/Product';
import { addToCart } from '../../redux/actions/cart';
import { displayProduct } from '../../redux/actions/productActions';

class Home extends Component
{    
    
    addToCart(product)
    {
        this.props.addToCart(product);
    }
    
    displayProduct(product)
    {
        this.props.displayProduct(product);
    }

    render()
    {
        return (
            <div>
                <Jumbotron />
                <div className="container">
                    <section>
                        <div className="row">
                        { this.props.products.map((product) => <Product add={() => this.addToCart(product)} display={() => this.displayProduct(product)} key={product.id} {...product} /> )}
                        
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>
{
    return {
        products: state.products.flowers
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        addToCart: product => dispatch(addToCart(product)),
        displayProduct: product => dispatch(displayProduct(product))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
