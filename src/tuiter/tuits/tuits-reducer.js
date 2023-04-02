import {createSlice} from "@reduxjs/toolkit";
// import tuits from './tuits.json';
import {findTuitsThunk, deleteTuitThunk, createTuitThunk, updateTuitThunk, dislikeTuitThunk} from "../../services/tuits-thunks";

const initialState = {
  tuits: [],
  loading: false
};  

// const currentUser = {
//   "avatarIcon": "nasa-logo.jpg",
//   "userName": "NASA",
//   "handle": "NASA",
// };

// const templateTuit = {
//   ...currentUser,
//   "time": "1s",
//   "topic": "Trending",
//   "title": "News from NASA.",
//   "showThread" : false,
//   "replies": 0,
//   "retuits": 0,
//   "likes": 0,
//   "liked": false
// };

const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: initialState,
  extraReducers: {
    [findTuitsThunk.pending]:
    (state) => {
      state.loading = true;
      state.tuits = [];
    },
    [findTuitsThunk.fulfilled]:
    (state, { payload }) => {
      state.loading = false;
      state.tuits = payload;
    },
    [findTuitsThunk.rejected]:
    (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [deleteTuitThunk.fulfilled]:
    (state, { payload }) => {
      state.loading = false;
      state.tuits = state.tuits.filter(t => t._id !== payload);
    },
    [createTuitThunk.fulfilled]:
    (state, { payload }) => {
      state.loading = false;
      // state.tuits.push(payload);
      state.tuits.unshift(payload);
    },
    [updateTuitThunk.fulfilled]:
    (state, { payload }) => {
      state.loading = false;
      const tuit = state.tuits.find(tuit => tuit._id === payload._id);
      tuit.liked = !tuit.liked;
      tuit.likes = (tuit.liked === true) ? tuit.likes + 1 : tuit.likes - 1;
    },
    [dislikeTuitThunk.fulfilled]:
    (state, { payload }) => {
      state.loading = false;
      const tuit = state.tuits.find(tuit => tuit._id === payload._id);
      tuit.disliked = !tuit.disliked;
      tuit.dislikes = (tuit.disliked === true) ? tuit.dislikes + 1 : tuit.dislikes - 1;
    }
  },
  reducers: {}
  // initialState: tuits,
  // reducers: {
  //   likeTuit(state, action) {
  //     const tuit = state.find(tuit =>
  //       tuit._id === action.payload._id);
  //     tuit.liked = !tuit.liked;
  //     tuit.likes = (tuit.liked === true) ? tuit.likes + 1 : tuit.likes - 1;  
  //   },
  //   createTuit(state, action) {
  //     state.unshift({
  //       ...action.payload,
  //       ...templateTuit,
  //       _id: (new Date()).getTime(),
  //     })
  //   },      
  //   deleteTuit(state, action) {
  //     const index = state.findIndex(tuit => 
  //       tuit._id === action.payload._id);
  //     state.splice(index, 1);
  //   }
  // }
});
export default tuitsSlice.reducer;
// export const {likeTuit, createTuit, deleteTuit} = tuitsSlice.actions;