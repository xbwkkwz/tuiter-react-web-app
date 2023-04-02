import {Link} from "react-router-dom";
import React from "react";
import {useDispatch} from "react-redux";
// import { deleteTuit } from "./tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./TuitStats";

const checkRepost = (post) => {
  if ("repostBy" in post) {
    return(
      <div className="d-flex text-secondary">
        <div className="me-3" style={{width:"48px"}}><i className="bi bi-repeat float-end"></i></div>
        <div>{post.repostBy} reposted</div>
      </div>
    );
  }
}

const checkContent = (post) => {
  if ("tuit" in post) {
    return(
      checkAt(post)
    );
  }
}

const checkAt = (post) => {
  let list = [];
  let start = 0;
  let find = false;

  for (let i=0; i<post.tuit.length; i++) {
    if (!find && post.tuit[i] === '@') {
      list.push(post.tuit.substring(start, i));
      start = i;
      find = true;
    }
    if (find && post.tuit[i] === ' ') {
      list.push(<Link to="" style={{textDecorationLine:"none"}}>{post.tuit.substring(start, i)}</Link>);
      start = i;
      find = false;
    }
  }
  
  if (!find) {
    list.push(post.tuit.substring(start, post.tuit.length));
  }
  else {
    list.push(<Link to="" style={{textDecorationLine:"none"}}>{post.tuit.substring(start, post.tuit.length)}</Link>);
  }
  return(list);
}

const checkLink = (post) => {
  if ("link" in post) {
    return(
      <Link to="" style={{textDecorationLine:"none"}}>{post.link}</Link>
    );
  }
}

const checkImage = (post) => {
  if ("image" in post) {
    return(
      <img className="w-100 rounded-3" src={`/images/${post.image}`} alt=""/>
    );
  }
}

const checkExternal = (post) => {
  if ("external" in post) {
    return(
      <ul className="list-group">
        <div className="list-group-item p-0"><img className="w-100 rounded-top" src={`/images/${post.external.image}`} alt=""/></div>
        <div className="list-group-item">
          <div className="fw-bolder">{post.external.title}</div>
          <div>{post.external.content}</div>
          <div className="text-secondary"><i className="bi bi-link-45deg"></i> {post.external.website}</div>
        </div>
      </ul>
    );
  }
}

const TuitItem = (
  {
    post = {
      "_id": 123,
      "repostBy": "Elon Musk",
      "avatarIcon": "elon-logo.jpg",
      "userName": "Elon Musk", 
      "handle": "elonmusk",
      "time": "23h",
      "tuit": "Amazing show about @Inspiration4x mission!",
      "link": "trib.al/nx2Gfaq",
      "image": "countdown-post.jpg",
      "external": {
        "image": "countdown-post.jpg",
        "title": "CountDown: Inspiration4 Mission to Space | Netflix Official Site",
        "content": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
        "website": "netflix.com"
      },
      "showThread" : false
    }
  }
) => {

  const dispatch = useDispatch();

  const deleteTuitHandler = (id) => {
    // dispatch(deleteTuit(tuit));
    dispatch(deleteTuitThunk(id));
  }

  return(
    <li className="list-group-item">
      {/* 1 repost part */}
      {checkRepost(post)}

      {/* 2 main part */}
      <div className="d-flex mb-2">
        <div className="me-3">
          <img className="rounded-circle" width={48} src={`/images/${post.avatarIcon}`} alt=""/>
        </div>
        {/* right part */}
        <div className="w-100">
          <div>
            <span className="fw-bolder">{post.userName}</span> <i className="bi bi-patch-check-fill text-primary"></i> <span className="text-secondary">@{post.handle} · {post.time}</span>
            <Link to="" className="text-secondary float-end" title="Delete" onClick={() => deleteTuitHandler(post._id)}><i className="bi bi-x-lg"></i></Link>
          </div>
          
          {/* post content here */}
          <div className="mb-2">{checkContent(post)} {checkLink(post)}</div>
          
          {/* image here */}
          {checkImage(post)}

          {/* external website here */}
          {checkExternal(post)}
        </div>
      </div>

      {/* 3 buttons */}
      <TuitStats post={post}/>

      {/* 4 last */}
      <Link to="" className={`mx-5 px-3 mt-3 ${(("showThread" in post) && (post.showThread === true)) ? "d-block" : "d-none"}`} style={{textDecorationLine:"none"}}>Show this thread</Link>
    </li>
  );
};
export default TuitItem;
