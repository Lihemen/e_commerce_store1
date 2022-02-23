import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginButton from "./buttons/LoginButton";
import SignupButton from "./buttons/SignupButton";

const Navbar = () => {
  const state = useSelector((state) => state.handle_cart);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          E commerce
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="buttons">
            <LoginButton />
            <SignupButton />
            <Link href="" className="btn btn-outline-dark ms-2" to="/cart">
              <i className="fa fa-shopping-cart"></i> Cart (
              {state ? state.length : 0})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
