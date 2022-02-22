import { combineReducers } from "@reduxjs/toolkit";
import handle_cart from "./cart.reducer";

const root_reducer = combineReducers({
  handle_cart,
});

export default root_reducer;
