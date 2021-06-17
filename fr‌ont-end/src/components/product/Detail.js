import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/product/Detail.css';
import Rating from '../product/Rating';
import data from '../../dummy/data';

const Detail = (props) => {
    const product = data.products.find(x => x._id == props.match.params.id);

    console.log(props.match.params.id);
    if (!product) {
        return <h1 className="text-center fw-bold text-muted mt-5 mb-5">Product Not Found</h1>
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="row mt-5 mb-5">
                <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <img className="img-fluid" src={product.image} />
                    <div className="row mt-3 mobile">
                        <div className="col-3">
                            <img className="img-fluid" src={product.image} />
                        </div>
                        <div className="col-3">
                            <img className="img-fluid" src={product.image} />
                        </div>
                        <div className="col-3">
                            <img className="img-fluid" src={product.image} />
                        </div>
                        <div className="col-3">
                            <img className="img-fluid" src={product.image} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/" className="bread-item text-muted">Home</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to="/all" className="bread-item text-muted">T-Shirt</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
                        </ol>
                    </nav>
                    <h1 className="text-muted fw-bold">{product.name}</h1>
                    <hr />
                    <h3>Rp. {product.price}</h3>
                    <div className="row mt-3">
                        <div className="col-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                            <p className="fw-bold pt-2">Size</p>
                        </div>
                        <div className="col-4 col-md-6 col-lg-6 col-xl-6 col-xxl-6 col-6">
                            <div className="dropdown">
                                <button
                                    className="btn btn-transparent dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >Choose an option</button>
                                <ul className="dropdown-menu rounded-0" aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <a className="dropdown-item" href="#">{product.size[0]}</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">{product.size[1]}</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">{product.size[2]}</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">{product.size[3]}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {product.stock > 0 ?
                            <div>
                                <div className="row">
                                    <div className="col-7 col-xl-4 col-xxl-4 col-5">
                                        <div className="input-group">
                                            <span className="input-group-btn">
                                                <button
                                                    type="button"
                                                    className="quantity-left-minus btn btn-dark btn-number rounded-0"
                                                    data-type="minus"
                                                    data-field>
                                                    <i className="fas fa-minus"></i>
                                                </button>
                                            </span>
                                            <span
                                                type="text"
                                                id="quantity"
                                                name="quantity"
                                                className="text-center pt-1 w-50 fw-bold p"
                                            >1</span>
                                            <span className="input-group-btn">
                                                <button
                                                    type="button"
                                                    className="quantity-right-plus btn btn-dark btn-number rounded-0"
                                                    data-type="plus"
                                                    data-field>
                                                    <i className="fas fa-plus"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-4 col-md-5">
                                        <button className="btn btn-dark">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                            : <span className="text-danger fw-bold">Stock Empty</span>
                        }
                        <div className="row mt-5 desktop">
                            <div className="col-3">
                                <img className="img-fluid" src={product.image} />
                            </div>
                            <div className="col-3">
                                <img className="img-fluid" src={product.image} />
                            </div>
                            <div className="col-3">
                                <img className="img-fluid" src={product.image} />
                            </div>
                            <div className="col-3">
                                <img className="img-fluid" src={product.image} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button
                                className="nav-link active"
                                id="nav-home-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-home"
                                type="button"
                                role="tab"
                                aria-controls="nav-home"
                                aria-selected="true"
                            >Description</button>
                            <button
                                className="nav-link"
                                id="nav-profile-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-profile"
                                type="button"
                                role="tab"
                                aria-controls="nav-profile"
                                aria-selected="false"
                            >Additional Information</button>
                            <button
                                className="nav-link"
                                id="nav-contact-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-contact"
                                type="button"
                                role="tab"
                                aria-controls="nav-contact"
                                aria-selected="false"
                            >Reviews</button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div
                            className="tab-pane fade show active"
                            id="nav-home"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab">
                            <p
                                className="mt-3"
                            >{product.description}</p>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="nav-profile"
                            role="tabpanel"
                            aria-labelledby="nav-profile-tab">
                            <div className="row mt-3">
                                <div className="col-md-2">
                                    <p className="text-muted fw-bold">WEIGHT</p>
                                </div>
                                <div className="col-md-6 text-start">
                                    <p>N/A</p>
                                </div>
                                <hr />
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-2">
                                    <p className="text-muted fw-bold">SIZE</p>
                                </div>
                                <div className="col-md-6 text-start">
                                    <p>{product.size.join(', ')}</p>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="nav-contact"
                            role="tabpanel"
                            aria-labelledby="nav-contact-tab">
                            <h4 className="fw-bold mt-3">Reviews</h4>
                            <Rating rating={product.rating} count_review={product.count_review} />

                            <div className="card review-card-detail">
                                <div className="p-5">
                                    <h3 className="text-muted fw-bold">Be the first to review “{product.name}”</h3>
                                    <p className="fw-bold mt-4">Your Rating *</p>
                                    <div className="rate">
                                        <input type="radio" id="star5" name="rate" value="5" />
                                        <label for="star5" title="text">5 stars</label>
                                        <input type="radio" id="star4" name="rate" value="4" />
                                        <label for="star4" title="text">4 stars</label>
                                        <input type="radio" id="star3" name="rate" value="3" />
                                        <label for="star3" title="text">3 stars</label>
                                        <input type="radio" id="star2" name="rate" value="2" />
                                        <label for="star2" title="text">2 stars</label>
                                        <input type="radio" id="star1" name="rate" value="1" />
                                        <label for="star1" title="text">1 star</label>
                                    </div>
                                    <div className="mb-3">
                                        <br />
                                        <p className="fw-bold mt-4">Your Review *</p>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label for="Name" className="fw-bold">Name *</label>
                                            <input type="text" className="form-control mt-3" id="Name" />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="Email" className="fw-bold">Email *</label>
                                            <input type="email" className="form-control mt-3" id="Email" />
                                        </div>
                                    </div>

                                    <div className="form-check mt-3">
                                        <input className="form-check-input" type="checkbox" value id="flexCheckDefault" />
                                        <label
                                            className="form-check-label fw-bold"
                                            for="flexCheckDefault"
                                        >Notify me of new posts by email.</label>
                                    </div>

                                    <button className="btn mt-3 btn-dark text-light">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Detail;