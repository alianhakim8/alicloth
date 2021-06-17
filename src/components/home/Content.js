import React from 'react';
import data from '../../dummy/data';
import Product from '../product/Product';

const Content = () => {
    return (
        <>
            <div class="container">
                <div class="row mt-5 mb-5">
                    {
                        data.products.map((product) => (
                            <Product key={product._id} product={product} />
                        ))
                    }
                </div>
            </div>
        </>
    )
};

export default Content;