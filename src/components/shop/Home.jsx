import React from 'react';
import { connect } from 'react-redux';
import Jumbotron from './home/Jumbotron'
import Product from './shared/Product';

const Home = (props) =>
{
    return (
        <div>
            <Jumbotron />
            <div className="container">
                <section>
                    <div className="row">
                    { props.products.map((product) => <Product key={product.id} {...product} /> )}
                    </div>
                </section>
            </div>
        </div>
    );
}

const mapStateToProps = (state) =>
{
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Home);