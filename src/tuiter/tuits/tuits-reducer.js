import {createSlice} from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
  "avatarIcon": "nasa-logo.jpg",
  "userName": "NASA",
  "handle": "NASA",
};

const templateTuit = {
  ...currentUser,
  "time": "1s",
  "topic": "Trending",
  "title": "News from NASA.",
  "showThread" : false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
  "liked": false
};

const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: tuits,
  reducers: {
    likeTuit(state, action) {
      const tuit = state.find(tuit =>
        tuit._id === action.payload._id);
      tuit.liked = !tuit.liked;
      tuit.likes = (tuit.liked === true) ? tuit.likes + 1 : tuit.likes - 1;  
    },
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    },      
    deleteTuit(state, action) {
      const index = state.findIndex(tuit => 
        tuit._id === action.payload._id);
      state.splice(index, 1);
    }
  }
});
export default tuitsSlice.reducer;
export const {likeTuit, createTuit, deleteTuit} = tuitsSlice.actions;