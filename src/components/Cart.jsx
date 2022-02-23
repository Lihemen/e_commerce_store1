import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import {
  add_quantity,
  subtract_quantity,
  remove_from_cart,
} from "../redux/action";

const Cart = () => {
  const state = useSelector((state) => state.handle_cart);
  const dispatch = useDispatch();

  const handle_close = (item) => {
    dispatch(remove_from_cart(item));
  };

  const handle_add = (item) => {
    dispatch(add_quantity(item));
  };

  const handle_subtract = (item) => {
    dispatch(subtract_quantity(item));
  };

  const cart_items = (item) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={item.id}>
        <div className="container py-4">
          <button
            className=" btn-close float-end"
            aria-label="Close"
            onClick={() => handle_close(item)}
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={item.image}
                alt={item.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{item.title}</h3>
              <div className="d-flex justify-content-between">
                <p className="lead fw-bold">${item.price} </p>
                <p className="lead fw-bold">({item.quantity}) </p>
              </div>
              <div className="buttons">
                <button
                  className="btn btn-outline-dark px-2"
                  onClick={() => handle_add(item)}
                >
                  <i className="fa fa-plus p-0"></i>
                </button>
                <button
                  className="btn btn-outline-dark mx-3 px-2"
                  onClick={() => handle_subtract(item)}
                >
                  <i className="fa fa-minus p-0"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const EmptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <img src="/assets/empty_cart.jpg" alt="Oops, cart is empty" />
        </div>
      </div>
    );
  };
  const checkout_btn = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink
            to="/checkout"
            className="btn btn-outline-dark mb-5 w-25 mx-auto"
          >
            Proceed to checkout
          </NavLink>
        </div>
      </div>
    );
  };
  return (
    <>
      {state.length !== 0 ? state.map(cart_items) : <EmptyCart />}
      {state.length !== 0 ? checkout_btn() : null}
    </>
  );
};

export default Cart;
