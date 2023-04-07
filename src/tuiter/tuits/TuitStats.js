import {Link} from "react-router-dom";
import React from "react";
import {useDispatch} from "react-redux";
// import { likeTuit } from "./tuits-reducer";
import {updateTuitThunk, dislikeTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (
  {post = {
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "liked": false,
    "dislikes": 0,
    "disliked": false
  }}
) => {

  const dispatch = useDispatch();

  const likeTuitHandler = (tuit) => {
    // dispatch(likeTuit(tuit));
    let newTuit = {"_id": tuit._id, "likes": 0, "liked": false};
    newTuit.liked = !tuit.liked;
    newTuit.likes = (newTuit.liked === true) ? tuit.likes + 1 : tuit.likes - 1;
    dispatch(updateTuitThunk(newTuit));
  };

  const dislikeTuitHandler = (tuit) => {
    // dispatch(likeTuit(tuit));
    let newTuit = {"_id": tuit._id, "dislikes": 0, "disliked": false};
    newTuit.disliked = !tuit.disliked;
    newTuit.dislikes = (newTuit.disliked === true) ? tuit.dislikes + 1 : tuit.dislikes - 1;
    dispatch(dislikeTuitThunk(newTuit));
  };

  return(
    <div className="d-flex justify-content-between mx-5 px-3">
        <Link to="" className="text-secondary" style={{textDecorationLine:"none"}} title="Reply"><i className="bi bi-chat me-2"></i>{post.replies}</Link>
        <Link to="" className="text-secondary" style={{textDecorationLine:"none"}} title="Retuit"><i className="bi bi-repeat me-2"></i>{post.retuits}</Link>
        <Link to="" className="text-secondary" style={{textDecorationLine:"none"}} title="Like" onClick={() => likeTuitHandler(post)}><i className={`bi ${(post.liked === true) ? "bi-heart-fill text-danger" : "bi-heart"} me-2`}></i>{post.likes}</Link>
        <Link to="" className="text-secondary" style={{textDecorationLine:"none"}} title="Dislike" onClick={() => dislikeTuitHandler(post)}><i className={`bi ${(post.disliked === true) ? "bi-hand-thumbs-down-fill text-primary" : "bi-hand-thumbs-down"} me-2`}></i>{post.dislikes}</Link>
        <Link to="" className="text-secondary" style={{textDecorationLine:"none"}} title="Share"><i className="bi bi-upload me-2"></i></Link>
    </div>
  );
};
export default TuitStats;