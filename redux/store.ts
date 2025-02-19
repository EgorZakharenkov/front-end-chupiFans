import { configureStore } from "@reduxjs/toolkit";
import AnimeReducer from "./slices/Anime";
export const store = configureStore({
  reducer: {
    anime: AnimeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
