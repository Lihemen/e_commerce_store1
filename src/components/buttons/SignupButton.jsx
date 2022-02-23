import React from "react";
import SignUp from "../auth/SignUp";

const SignupButton = () => {
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-outline-dark"
        data-bs-toggle="modal"
        data-bs-target="#signupModal"
      >
        <i className="fa fa-login"></i>
        Signup
      </button>

      <SignUp />
    </>
  );
};

export default SignupButton;
