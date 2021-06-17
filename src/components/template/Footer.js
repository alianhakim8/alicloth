import React from 'react';
import '../assets/css/Footer.css';


const Footer = () => {
    return (
        <footer class="bg-dark text-white text-center">
            <div class="container p-4">
                <section class="mb-4">
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i class="fab fa-facebook-f"></i>
                    </a>

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i class="fab fa-twitter"></i>
                    </a>

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i class="fab fa-google"></i>
                    </a>

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i class="fab fa-instagram"></i>
                    </a>

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i class="fab fa-linkedin-in"></i>
                    </a>

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i class="fab fa-github"></i>
                    </a>
                </section>

                <section class>
                    <form action>
                        <div class="row d-flex justify-content-center">
                            <div class="col-auto">
                                <p class="pt-2">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>
                            <div class="col-md-5 col-12">
                                <div class="form-outline form-white mb-4">
                                    <input
                                        type="email"
                                        id="form5Example2"
                                        class="form-control"
                                        placeholder="Email Address"
                                    />
                                    <label class="form-label" for="form5Example2"></label>
                                </div>
                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-outline-light mb-4">Subscribe</button>
                            </div>
                        </div>
                    </form>
                </section>

                <section class="mb-4">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                        eum harum corrupti dicta, aliquam sequi voluptate quas.
                    </p>
                </section>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="text-uppercase">Hubungi kami</h3>
                        <p>
                            <i class="fas fa-map-marker-alt"></i> Jl. Ciwaruga No.53 Kecamatan Parongpong Kabupaten Bandung Barat
                        </p>
                    </div>
                </div>
            </div>

            <div class="copyright">
                <div class="container ">
                    <div class="p-3 text-start">
                        © 2021 Copyright
                        Ali Cloth Bandung
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

