import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="hero justify-content-center">
        <div className="card bg-light text-dark border-0">
          <img src="/assets/404.jpg" alt="Not Found" className="card-img" />
          <div className="card-img-overlay d-flex">
            <div className="container align-center text-center justify-content-center my-auto">
              <p className="fw-bold display-4">Oops Page Not Found</p>
              <Link to="/" className="btn btn-outline-dark ">
                <i className="fa fa-home"></i> Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
