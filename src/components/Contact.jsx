import React from "react";

const Contact = () => {
  function handle_submit(e) {
    e.preventDefault();
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center py-5">
          <div className="col-lg-6">
            <div className="display-6 fw-bold text-center mb-4 text-uppercase">
              Let's Hear From You
            </div>
            <div className="card bg-light text-dark ">
              <img
                src="/assets/contact.jpg"
                className="card-img"
                alt="Contact Us"
                height="200px"
              />
            </div>
            <form className="row align-items-center">
              <div className="form-floating my-4">
                <input
                  type="text"
                  className="form-control"
                  id="floatingFullname"
                  placeholder="Full name"
                />
                <label for="floatingFullname">Fullname</label>
              </div>
              <div className="form-floating mb-4">
                <input
                  type="tel"
                  className="form-control"
                  id="floatingTel"
                  placeholder="Phone Number"
                />
                <label for="floatingTel">Phone Number</label>
              </div>
              <div className="form-floating mb-4">
                <input
                  type="email"
                  className="form-control"
                  id="floatingEmail"
                  placeholder="name@example.com"
                />
                <label for="floatingEmail">Email Address</label>
              </div>
              <div className="form-floating mb-4">
                <textarea
                  className="form-control"
                  placeholder="Message here"
                  id="floatingTextarea2"
                  style={{ height: "200px", resize: "none" }}
                ></textarea>
                <label for="floatingTextarea2">Message Here</label>
              </div>
              <button
                className="btn btn-outline-dark  w-50 mx-auto"
                type="submit"
                onClick={handle_submit}
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
