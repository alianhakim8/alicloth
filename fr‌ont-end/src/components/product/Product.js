import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { product } = props;
    return (
        <div className="col-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-1">
            <img src={product.image} className="img-fluid" />
            <div className="card rounded-0">
                <div className="card-body">
                    <span className="badge bg-dark text-light"> Kaos Pria </span>
                    <Link to={`product/${product._id}`} className=" mt-2 text-decoration-none text-dark">
                        <h3 className="mt-2">{product.name}</h3>
                    </Link>
                    <p>Rp. {product.price}</p>
                    <Rating rating={product.rating} count_review={product.count_review} />
                    <Link to={`product/${product._id}`} className="btn bg-dark text-light w-100 mt-3">Beli</Link>
                </div>
            </div>
        </div>
    );
}

export default Product;