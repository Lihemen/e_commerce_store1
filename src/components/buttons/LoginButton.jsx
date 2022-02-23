import React from "react";
import Login from "../auth/Login";

const LoginButton = () => {
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-outline-dark mx-2"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        <i className="fa fa-login"></i>
        Login
      </button>

      {/* <!-- Modal --> */}
      <Login modal={true} />
    </>
  );
};

export default LoginButton;
