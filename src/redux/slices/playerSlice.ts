import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tracks } from "../../helpers/tracks";
import { TrackModel } from "../../models/Track.model";
import { RootState } from "../store";

interface PlayerState {
  tracks: TrackModel[];
  isPlaying: boolean;
  isLooping: boolean;
  currentTime: number;
}

const initialState: PlayerState = {
  tracks,
  isPlaying: false,
  isLooping: false,
  currentTime: 0,
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
      state.currentTime = 0;
    },
    activateLoop(state) {
      state.isLooping = true;
    },
    deactivateLoop(state) {
      state.isLooping = false;
    },
    raise1Sec(state) {
      state.currentTime = state.currentTime + 1;
    },
    resetCurrentTime(state) {
      state.currentTime = 0;
    },
  },
});

export const {
  play,
  stop,
  activateLoop,
  deactivateLoop,
  resetCurrentTime,
  raise1Sec,
} = playerSlice.actions;

export const selectPlayer = (state: RootState) => state.player;

export default playerSlice.reducer;
