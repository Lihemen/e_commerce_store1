import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-dark fw-bold mb-4">About Us</h1>
            <p className="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              quibusdam quia incidunt, consequuntur laboriosam corrupti in illum
              animi! Totam pariatur exercitationem recusandae quia commodi,
              illum, ad aut adipisci maiores consectetur iusto eaque maxime
              repudiandae. Sit earum non dignissimos enim tempore atque ex ipsa
              assumenda a, ea voluptates quos iure perspiciatis rem recusandae
              maxime nemo eum consequatur modi commodi perferendis vitae ab.
              Cumque laborum vel nihil dolorum exercitationem tempore
              perferendis facilis, aut incidunt quas earum autem saepe sint
              molestias totam facere dolorem, accusantium voluptatum ea nam sed
              illo quam. Dignissimos officiis, repellat magni animi veritatis
              quis, distinctio fugiat rem debitis maxime esse, nisi reiciendis
              nostrum fuga dolor doloremque laborum exercitationem delectus
              optio ipsam. Error, omnis suscipit. Iste, explicabo animi!
              Consequatur debitis blanditiis saepe perspiciatis natus quisquam
              veritatis omnis quibusdam eum maxime tempora delectus, dolorem
              odit molestias possimus explicabo tempore ut cupiditate inventore!
              Sit totam iste accusantium architecto laudantium a consequatur,
              facere labore at aliquam. Quaerat voluptates rerum neque ipsam
              eligendi quidem blanditiis amet at optio assumenda hic maiores,
              repellendus nam id cupiditate dignissimos debitis, illo odio ab
              perspiciatis! Iure reprehenderit, dolorum nam obcaecati assumenda
              quis inventore neque sapiente? Possimus et perferendis libero eum
              harum, dolores esse, ex sunt numquam sint vel.{" "}
            </p>
            <NavLink to="/contact" className="btn btn-outline-dark px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-lg-flex justify-content-center d-none">
            <img
              src="/assets/about.jpg"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
