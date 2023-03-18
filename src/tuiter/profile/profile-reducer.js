import {createSlice} from "@reduxjs/toolkit";
import profile from "./profile.json";

const profileSlice = createSlice({
  name: "profile",
  initialState: profile,
  reducers: {
    editName(state, action) {
      state.userName = action.payload.userName;
    },
    editBio(state, action) {
      state.bio = action.payload.bio;
    },
    editLocation(state, action) {
      state.location = action.payload.location;
    },
    editWebsite(state, action) {
      state.website = action.payload.website;
    },
    editBirth(state, action) {
      state.dateOfBirth = action.payload.dateOfBirth;
    }
  }
});
export default profileSlice.reducer;
export const {editName, editBio, editLocation, editWebsite, editBirth} = profileSlice.actions;