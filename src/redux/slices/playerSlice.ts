import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tracks } from "../../helpers/tracks";
import { TrackModel } from "../../models/Track.model";
import { RootState } from "../store";

interface PlayerState {
  tracks: TrackModel[];
  isPlaying: boolean;
  isLooping: boolean;
}

const initialState: PlayerState = {
  tracks,
  isPlaying: false,
  isLooping: false,
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
    activateLoop(state) {
      state.isLooping = true;
    },
    deactivateLoop(state) {
      state.isLooping = false;
    },
  },
});

export const { play, stop, activateLoop, deactivateLoop } = playerSlice.actions;

export const selectPlayer = (state: RootState) => state.player;

export default playerSlice.reducer;
