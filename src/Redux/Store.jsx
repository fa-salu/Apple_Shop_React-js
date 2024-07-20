import { configureStore } from "@reduxjs/toolkit";
import dbReducer from "./dbSlice";
import userReducer from "./userSlice";

const Store = configureStore({
  reducer: {
    db: dbReducer,
    user: userReducer,
  },
});

export default Store;
