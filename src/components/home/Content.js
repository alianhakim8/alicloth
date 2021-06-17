import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../dummy/data';
import Product from '../product/Product';

const Content = () => {
    return (
        <>
            <div class="container">
                <div class="row mt-5">
                    <div class="col-md-6">
                        <h3 class="fw-bold">T-shirt</h3>
                    </div>
                    <div class="col-md-6 ">
                        <Link to="all" class="fw-bold float-end pt-2 text-muted">Selengkapnya <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                        </svg></Link>
                    </div>
                </div>
                <hr />
                <div class="row mb-5">
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