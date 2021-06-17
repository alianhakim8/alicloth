import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="bg-dark text-center pt-4 pb-3">
                <div className="container">
                    <h3 className="my-cloth-name text-light">Cloth علي</h3>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <button
                        className="navbar-toggler"
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
                            className="bi bi-three-dots"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                            />
                        </svg>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Kontak</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">Tentang</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >Alian Hakim</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Keranjang
                                            <span className="badge bg-primary text-light">0</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Status Pemesanan</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Status Pembayaran</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Keluar</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a to="/about" className="nav-link">Cart</a>
                            </li>
                            <li className="nav-item">
                                <a to="/about" className="nav-link">Sign</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;