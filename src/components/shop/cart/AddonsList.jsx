import React from 'react'

const addonsList = () => (
            <div className="row add-ons-container">
                <div className="col-md-3 text-center">

                    <img 
                        src="https://demo.woothemes.com/storefront/wp-content/plugins/woocommerce/assets/images/placeholder.png"
                        alt="product representation" 
                        height="200" 
                    />
                    <div className="text-center">
                        <p className="display_product_name">Teddy Bear</p>
                        <p className="display_product_price">CAD 10.00</p>
                        <button type="button" className="btn btn-sm add_to_cart_btn">Add to cart</button>
                    </div>
                </div>

                <div className="col-md-3 text-center">
                    <img src="https://demo.woothemes.com/storefront/wp-content/plugins/woocommerce/assets/images/placeholder.png"
                        alt="product representation" height="200" />
                    <div className="text-center">
                        <p className="display_product_name">Chocolate</p>
                        <p className="display_product_price">CAD 15.00</p>
                        <button type="button" className="btn btn-sm add_to_cart_btn">Add to cart</button>
                    </div>
                </div>

                <div className="col-md-3 text-center">
                    <img 
                        src="https://demo.woothemes.com/storefront/wp-content/plugins/woocommerce/assets/images/placeholder.png"
                        alt="product representation" 
                        height="200"
                    />
                    <div className="text-center">
                        <p className="display_product_name">Balloon</p>
                        <p className="display_product_price">CAD 5.00</p>
                        <button type="button" className="btn btn-sm add_to_cart_btn">Add to cart</button>
                    </div>
                </div>

                <div className="col-md-3 text-center">
                    <img 
                        src="https://demo.woothemes.com/storefront/wp-content/plugins/woocommerce/assets/images/placeholder.png"
                        alt="product representation" 
                        height="200" 
                    />
                    <div className="text-center">
                        <p className="display_product_name">Card</p>
                        <p className="display_product_price">CAD 3.50</p>
                        <button type="button" className="btn btn-sm add_to_cart_btn">Add to cart</button>
                    </div>
                </div>
            </div>
);

export default addonsList;
