import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center py-5">
          <div className="col-lg-6">
            <div className="display-6 fw-bold text-center mb-4 text-uppercase">
              Let's Hear From You
            </div>
            <div class="card bg-light text-dark ">
              <img
                src="/assets/contact.jpg"
                class="card-img"
                alt="Contact Image"
                height="200px"
              />
            </div>
            <form className="row align-items-center">
              <div class="form-floating my-4">
                <input
                  type="text"
                  class="form-control"
                  id="floatingFullname"
                  placeholder="Full name"
                />
                <label for="floatingFullname">Fullname</label>
              </div>
              <div class="form-floating mb-4">
                <input
                  type="tel"
                  class="form-control"
                  id="floatingTel"
                  placeholder="Phone Number"
                />
                <label for="floatingTel">Phone Number</label>
              </div>
              <div class="form-floating mb-4">
                <input
                  type="email"
                  class="form-control"
                  id="floatingEmail"
                  placeholder="name@example.com"
                />
                <label for="floatingEmail">Email Address</label>
              </div>
              <div class="form-floating mb-4">
                <textarea
                  class="form-control"
                  placeholder="Message here"
                  id="floatingTextarea2"
                  style={{ height: "200px", resize: "none" }}
                ></textarea>
                <label for="floatingTextarea2">Message Here</label>
              </div>
              <button className="btn btn-outline-dark ">SEND</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
