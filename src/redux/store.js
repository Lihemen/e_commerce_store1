import { configureStore } from "@reduxjs/toolkit";

import root_reducer from "./reducers";

const store = configureStore({
  reducer: root_reducer,
});

export default store;
