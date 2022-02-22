import constants from "../constants";
const cart = [];

const handle_cart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case constants.ADD_TO_CART:
      const in_cart = state.find((p) => p.id === product.id);
      if (in_cart) {
        // Update quantity
        return state.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...state, { ...product, quantity: 1 }];
    case constants.REMOVE_FROM_CART:
      const prod = state.find((p) => p.id === product.id);
      if (prod.quantity === 1) {
        return state.filter((p) => p.id !== product.id);
      }
      return state.map((p) => {
        if (p.id === product.id) {
          return { ...p, quantity: p.quantity - 1 };
        }
        return p;
      });

    case constants.CLEAR_CART:
      return [];
    default:
      return state;
  }
};

export default handle_cart;
