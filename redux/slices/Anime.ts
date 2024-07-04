import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AnimeList } from "@/types/anime.types";
import { api } from "@/axios/axiosBase";

export const getAnimes = createAsyncThunk("anime/getAnimes", async () => {
  return await api.get(
    "/title/changes?filter=posters,names,description,id&limit=25",
  );
});
export const searchAnimes = createAsyncThunk(
  "anime/search",
  async (search: string) => {
    return await api.get(`/title/search?search=${search}&limit=50`);
  },
);

interface AnimeState {
  anime: AnimeList | null;
}

const initialState: AnimeState = {
  anime: null,
};

export const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAnimes.fulfilled, (state, action) => {
      // @ts-ignore
      state.anime = action.payload.data;
    });
    builder.addCase(searchAnimes.fulfilled, (state, action) => {
      // @ts-ignore
      state.anime = action.payload.data;
    });
  },
});

export const {} = animeSlice.actions;

export default animeSlice.reducer;
