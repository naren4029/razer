import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../app/slice/profileSlice";
import toolbarButtonReducer from "../app/slice/toolbarButtonSlice";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    toolbar: toolbarButtonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
