import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";
import postsReducer from "./reducers/PostsSlice";
import zodiacsReducer from "./reducers/ZodiacsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    zodiacs: zodiacsReducer,
  },
});

export default store;
