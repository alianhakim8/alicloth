import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../product/Product';
import axios from 'axios';
import Loading from '../utils/Loading';
import Error from '../utils/ErrorView';

const Content = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/v1/products');
                setLoading(false)
                setProducts(data);

            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchData();
    }, [])
    return (
        <>
            {loading ? <Loading /> : error ? <Error error={error}></Error> :
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <h3 className="fw-bold">T-shirt</h3>
                        </div>
                        <div className="col-md-6 ">
                            <Link to="all" className="fw-bold float-end pt-2 text-muted">Selengkapnya <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg></Link>
                        </div>
                    </div>
                    <hr />
                    <div className="row mb-5">
                        {
                            products.map((product) => (
                                <Product key={product._id} product={product} />
                            ))
                        }
                    </div>
                </div>
            }
        </>
    )
};

export default Content;