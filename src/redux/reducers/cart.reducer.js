import constants from "../constants";
const cart = [];

const handle_cart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case constants.ADD_TO_CART:
      const in_cart = state.find((p) => p.id === product.id);
      if (in_cart) {
        // Return state
        return state;
      }
      return [...state, { ...product, quantity: 1 }];
    case constants.REMOVE_FROM_CART:
      return state.filter((p) => p.id !== product.id);

    case constants.ADD_QUANTITY:
      const product_in_cart = state.find((p) => p.id === product.id);
      if (product_in_cart) {
        return state.map((p) => {
          if (p.id === product.id) {
            return { ...p, quantity: p.quantity + 1 };
          }
          return p;
        });
      }
      break;
    case constants.SUBTRACT_QUANTITY:
      const product_to_subtract = state.find((p) => p.id === product.id);
      if (product_to_subtract) {
        return state.map((p) => {
          if (p.id === product.id && p.quantity > 1) {
            return { ...p, quantity: p.quantity - 1 };
          }
          return p;
        });
      }
      break;

    case constants.CLEAR_CART:
      return [];
    default:
      return state;
  }
};

export default handle_cart;
