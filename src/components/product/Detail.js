import React from 'react';
import '../assets/css/product/Detail.css';
import Rating from '../product/Rating';
import data from '../../dummy/data';

const Detail = (props) => {
    const product = data.products.find(x => x._id == props.match.params.id);
    let rating = null;
    let message = null;
    console.log(props.match.params.id);
    if (!product) {
        return <h1 class="text-center fw-bold text-muted mt-5 mb-5">Product Not Found</h1>
    }
    if (product.rating == 0) {
        message = 'Belum ada review';
    } else {
        rating = product.rating;
    }

    return (
        <div class="container mt-5 mb-5">
            <div class="row mt-5 mb-5">
                <div class="col-md-6">
                    <img class="img-fluid" src={product.image} />
                    <div class="row mt-3 mobile">
                        <div class="col-3">
                            <img class="img-fluid" />
                        </div>
                        <div class="col-3">
                            <img class="img-fluid" />
                        </div>
                        <div class="col-3">
                            <img class="img-fluid" />
                        </div>
                        <div class="col-3">
                            <img class="img-fluid" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a to="/" class="bread-item text-muted">Home</a>
                            </li>
                            <li class="breadcrumb-item">
                                <a to="/" class="bread-item text-muted">T-Shirt</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">{product.name}</li>
                        </ol>
                    </nav>
                    <h1 class="text-muted fw-bold">{product.name}</h1>
                    <hr />
                    <h3>Rp. {product.price}</h3>
                    <div class="row mt-3">
                        <div class="col-md-2 col-2">
                            <p class="fw-bold pt-2">Size</p>
                        </div>
                        <div class="col-md-6 col-6">
                            <div class="dropdown">
                                <button
                                    class="btn btn-transparent dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >Choose an option</button>
                                <ul class="dropdown-menu rounded-0" aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <a class="dropdown-item" href="#">{product.size[0]}</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">{product.size[1]}</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">{product.size[2]}</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">{product.size[3]}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col-md-4 col-5">
                                <div class="input-group">
                                    <span class="input-group-btn">
                                        <button
                                            type="button"
                                            class="quantity-left-minus btn btn-dark btn-number rounded-0"
                                            data-type="minus"
                                            data-field>
                                            <i class="fas fa-minus"></i>
                                        </button>
                                    </span>
                                    <input
                                        type="text"
                                        id="quantity"
                                        name="quantity"
                                        class="text-center w-50"
                                        min="1"
                                        value="1"
                                        max="100"
                                    />
                                    <span class="input-group-btn">
                                        <button
                                            type="button"
                                            class="quantity-right-plus btn btn-dark btn-number rounded-0"
                                            data-type="plus"
                                            data-field>
                                            <i class="fas fa-plus"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <div class="col-md-7 col-7">
                                <button class="btn btn-dark">Add To Cart</button>
                            </div>
                            <div class="row mt-3 desktop">
                                <div class="col-3">
                                    <img class="img-fluid" />
                                </div>
                                <div class="col-3">
                                    <img class="img-fluid" />
                                </div>
                                <div class="col-3">
                                    <img class="img-fluid" />
                                </div>
                                <div class="col-3">
                                    <img class="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <button
                                class="nav-link active"
                                id="nav-home-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-home"
                                type="button"
                                role="tab"
                                aria-controls="nav-home"
                                aria-selected="true"
                            >Description</button>
                            <button
                                class="nav-link"
                                id="nav-profile-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-profile"
                                type="button"
                                role="tab"
                                aria-controls="nav-profile"
                                aria-selected="false"
                            >Additional Information</button>
                            <button
                                class="nav-link"
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
                    <div class="tab-content" id="nav-tabContent">
                        <div
                            class="tab-pane fade show active"
                            id="nav-home"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab">
                            <p
                                class="mt-3"
                            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut cumque possimus quasi sequi temporibus ullam, animi quidem voluptate in dolorem rem, magni architecto alias sunt distinctio earum perferendis velit. Ipsam labore, aliquam amet numquam commodi, iste, quaerat sit esse distinctio nobis repellendus sapiente adipisci ipsa id non! Consectetur provident fugit ab aut aperiam repellendus ipsam, deleniti expedita eum, cupiditate molestiae alias voluptatibus incidunt animi quibusdam perferendis esse minima eius nemo quisquam iusto est qui ratione error. Quam sapiente minima ducimus quis placeat mollitia saepe illo, fuga accusamus commodi iure, blanditiis consequuntur aliquid, aliquam qui aut amet harum. Possimus iure id impedit dignissimos repellat ratione, ea repudiandae, commodi ipsam similique voluptatibus rem enim, accusamus expedita nihil natus cumque. Veniam aperiam tenetur totam molestiae magni pariatur aliquam, obcaecati sed saepe ipsam dolore expedita ducimus, officia necessitatibus facere culpa eum exercitationem voluptates recusandae tempora rem! Quo ut inventore quidem nostrum deserunt illo nobis? Ex, quia debitis animi necessitatibus labore quidem maxime deserunt a perferendis, numquam explicabo laudantium rem, modi nulla iste. Voluptatem nostrum cum mollitia magni iste perferendis molestias fugit dolores ut, impedit velit illo doloremque molestiae accusantium rerum magnam debitis veritatis eos suscipit dignissimos vitae asperiores. Repudiandae libero consequuntur quae praesentium magnam!</p>
                        </div>
                        <div
                            class="tab-pane fade"
                            id="nav-profile"
                            role="tabpanel"
                            aria-labelledby="nav-profile-tab">
                            <div class="row mt-3">
                                <div class="col-md-2">
                                    <p class="text-muted fw-bold">WEIGHT</p>
                                </div>
                                <div class="col-md-6 text-start">
                                    <p>N/A</p>
                                </div>
                                <hr />
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-2">
                                    <p class="text-muted fw-bold">SIZE</p>
                                </div>
                                <div class="col-md-6 text-start">
                                    <p>Size, S, M, L, XL, XXL, 3XL, 4XL</p>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div
                            class="tab-pane fade"
                            id="nav-contact"
                            role="tabpanel"
                            aria-labelledby="nav-contact-tab">
                            <h4 class="fw-bold mt-3">Reviews</h4>
                            <Rating rating={rating} count_review={product.count_review} />

                            <div class="card review-card-detail">
                                <div class="p-5">
                                    <h3 class="text-muted fw-bold">Be the first to review “Product Title”</h3>
                                    <p class="fw-bold mt-4">Your Rating *</p>
                                    <div class="rate">
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
                                    <div class="mb-3">
                                        <br />
                                        <p class="fw-bold mt-4">Your Review *</p>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label for="Name" class="fw-bold">Name *</label>
                                            <input type="text" class="form-control mt-3" id="Name" />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="Email" class="fw-bold">Email *</label>
                                            <input type="email" class="form-control mt-3" id="Email" />
                                        </div>
                                    </div>

                                    <div class="form-check mt-3">
                                        <input class="form-check-input" type="checkbox" value id="flexCheckDefault" />
                                        <label
                                            class="form-check-label fw-bold"
                                            for="flexCheckDefault"
                                        >Notify me of new posts by email.</label>
                                    </div>

                                    <button class="btn mt-3 btn-dark text-light">Submit</button>
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