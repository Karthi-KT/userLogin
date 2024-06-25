import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import loginReducer from "./loginSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    login: loginReducer,
  },
});

export default store;
