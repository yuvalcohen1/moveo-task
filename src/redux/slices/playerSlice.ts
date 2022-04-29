import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tracks } from "../../helpers/tracks";
import { TrackModel } from "../../models/Track.model";
import { RootState } from "../store";

interface PlayerState {
  tracks: TrackModel[];
  isPlaying: boolean;
}

const initialState: PlayerState = {
  tracks,
  isPlaying: false,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    play(state) {
      state.isPlaying = true;
    },
    stop(state) {
      state.isPlaying = false;
    },
  },
});

export const { play, stop } = playerSlice.actions;

export const selectPlayer = (state: RootState) => state.player;

export default playerSlice.reducer;
