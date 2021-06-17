import React from 'react';
import '../assets/css/Footer.css';


const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center">
            <div className="container p-4">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fab fa-facebook-f"></i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fab fa-twitter"></i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fab fa-google"></i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fab fa-linkedin-in"></i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fab fa-github"></i>
                    </a>
                </section>

                <section className>
                    <form action>
                        <div className="row d-flex justify-content-center">
                            <div className="col-auto">
                                <p className="pt-2">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>
                            <div className="col-md-5 col-12">
                                <div className="form-outline form-white mb-4">
                                    <input
                                        type="email"
                                        id="form5Example2"
                                        className="form-control"
                                        placeholder="Email Address"
                                    />
                                    <label className="form-label" for="form5Example2"></label>
                                </div>
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-outline-light mb-4">Subscribe</button>
                            </div>
                        </div>
                    </form>
                </section>

                <section className="mb-4">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                        eum harum corrupti dicta, aliquam sequi voluptate quas.
                    </p>
                </section>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-uppercase">Hubungi kami</h3>
                        <p>
                            <i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;Jl. Ciwaruga No.53 Kecamatan Parongpong Kabupaten Bandung Barat
                        </p>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <div className="container ">
                    <div className="p-3 text-start">
                        © 2021 Copyright
                        Ali Cloth Bandung
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

