import constants from "../constants";

export const add_to_cart = (product) => {
  return {
    type: constants.ADD_TO_CART,
    payload: product,
  };
};

export const remove_from_cart = (product) => {
  return {
    type: constants.REMOVE_FROM_CART,
    payload: product,
  };
};

export const add_quantity = (product) => {
  return {
    type: constants.ADD_QUANTITY,
    payload: product,
  };
};

export const subtract_quantity = (product) => {
  return {
    type: constants.SUBTRACT_QUANTITY,
    payload: product,
  };
};

export const clear_cart = () => {
  return {
    type: constants.CLEAR_CART,
  };
};
