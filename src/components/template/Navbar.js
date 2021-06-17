import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav class="bg-dark text-center pt-4 pb-3">
                <div class="container">
                    <h3 class="my-cloth-name text-light">Cloth علي</h3>
                </div>
            </nav>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-three-dots"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                            />
                        </svg>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/" class="nav-link">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" class="nav-link">Kontak</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about" class="nav-link">Tentang</Link>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >Alian Hakim</a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Keranjang
                                            <span class="badge bg-primary text-light">0</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Status Pemesanan</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Status Pembayaran</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Keluar</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a to="/about" class="nav-link">Cart</a>
                            </li>
                            <li class="nav-item">
                                <a to="/about" class="nav-link">Sign</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;