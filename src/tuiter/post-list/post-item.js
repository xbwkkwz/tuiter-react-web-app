import {Link} from "react-router-dom";

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
  if ("content" in post) {
    return(
      checkAt(post)
    );
  }
}

const checkAt = (post) => {
  let list = [];
  let start = 0;
  let find = false;

  for (let i=0; i<post.content.length; i++) {
    if (!find && post.content[i] === '@') {
      list.push(post.content.substring(start, i));
      start = i;
      find = true;
    }
    if (find && post.content[i] === ' ') {
      list.push(<Link to="" style={{textDecorationLine:"none"}}>{post.content.substring(start, i)}</Link>);
      start = i;
      find = false;
    }
  }
  
  if (!find) {
    list.push(post.content.substring(start, post.content.length));
  }
  else {
    list.push(<Link to="" style={{textDecorationLine:"none"}}>{post.content.substring(start, post.content.length)}</Link>);
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

const PostItem = (
  {
    post = {
      "repostBy": "Elon Musk",
      "avatarIcon": "elon-logo.jpg",
      "userName": "Elon Musk", 
      "handle": "elonmusk",
      "time": "23h",
      "content": "Amazing show about @Inspiration4x mission!",
      "link": "trib.al/nx2Gfaq",
      "image": "countdown-post.jpg",
      "external": {
        "image": "countdown-post.jpg",
        "title": "CountDown: Inspiration4 Mission to Space | Netflix Official Site",
        "content": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
        "website": "netflix.com"
      },
      "replies": "4.2K",
      "reposts": "3.5K",
      "likes": "37.5K", 
      "showThread" : true
    }
  }
  ) => {
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
            <Link to="" className="text-secondary float-end" title="More"><i className="bi bi-three-dots"></i></Link>
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
      <div className="d-flex justify-content-between mx-5 px-3">
        <Link to="" className="text-secondary" style={{textDecorationLine:"none"}} title="Reply"><i className="bi bi-chat me-2"></i>{post.replies}</Link>
        <Link to="" className="text-secondary" style={{textDecorationLine:"none"}} title="Repost"><i className="bi bi-repeat me-2"></i>{post.reposts}</Link>
        <Link to="" className="text-secondary" style={{textDecorationLine:"none"}} title="Like"><i className="bi bi-heart me-2"></i>{post.likes}</Link>
        <Link to="" className="text-secondary" style={{textDecorationLine:"none"}} title="Share"><i className="bi bi-upload me-2"></i></Link>
      </div>

      {/* 4 last */}
      <Link to="" className={`mx-5 px-3 mt-3 ${("showThread" in post) ? "d-block" : "d-none"}`} style={{textDecorationLine:"none"}}>Show this thread</Link>
    </li>
  );
};
export default PostItem;
