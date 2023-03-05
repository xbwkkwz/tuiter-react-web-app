const PostItem = (
  {
    post = {
      "repostBy": "Elon Musk",
      "avatarIcon": "elon-logo.jpg",
      "userName": "Elon Musk", 
      "handle": "elonmusk",
      "time": "23h",
      "content": "Amazing show about @Inspiration4x mission!",
      "link": "",
      "image": "countdown-post.jpg",
      "titleExternal": "CountDown: Inspiration4 Mission to Space | Netflix Official Site",
      "contentExternal": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
      "linkExternal": "netflix.com",
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
      <div className={`d-flex text-secondary ${("repostBy" in post) ? "d-block" : "d-none"}`}>
        <div className="me-3" style={{width:"48px"}}><i className="bi bi-repeat float-end"></i></div>
        <div className="">{post.repostBy} reposted</div>
      </div>

      {/* 2 main part */}
      <div className="d-flex mb-2">
        <div className="me-3">
          <img className="rounded-circle" width={48} src={`/images/${post.avatarIcon}`}/>
        </div>
        {/* right part */}
        <div className="w-100">
          <div>
            <span className="fw-bolder">{post.userName}</span> <i className="bi bi-patch-check-fill text-primary"></i> <span className="text-secondary">@{post.handle} · {post.time}</span>
            <a className="text-secondary float-end" href="#" title="More"><i className="bi bi-three-dots"></i></a>
          </div>
          
          <div className="mb-2">{post.content} <a style={{textDecorationLine:"none"}} href="#">{post.link}</a></div>
          
          <ul className="list-group rounded-3">
            <div className="list-group-item p-0"><img className={`w-100 ${("titleExternal" in post) ? "rounded-top" : "rounded-3"}`} src={`/images/${post.image}`}/></div>
            <div className={`list-group-item ${("titleExternal" in post) ? "d-block" : "d-none"}`}>
              <div className="fw-bolder">{post.titleExternal}</div>
              <div>{post.contentExternal}</div>
              <div className="text-secondary"><i className="bi bi-link-45deg"></i> {post.linkExternal}</div>
            </div>
          </ul>
        </div>
      </div>

      {/* 3 buttons */}
      <div className="d-flex justify-content-between mx-5 px-3">
        <a className="text-secondary" style={{textDecorationLine:"none"}} href="#" title="Reply"><i className="bi bi-chat me-3"></i>{post.replies}</a>
        <a className="text-secondary" style={{textDecorationLine:"none"}} href="#" title="Repost"><i className="bi bi-repeat me-3"></i>{post.reposts}</a>
        <a className="text-secondary" style={{textDecorationLine:"none"}} href="#" title="Like"><i className="bi bi-heart me-3"></i>{post.likes}</a>
        <a className="text-secondary" style={{textDecorationLine:"none"}} href="#" title="Share"><i className="bi bi-upload me-3"></i></a>
      </div>

      {/* 4 last */}
      <a className={`mx-5 px-3 mt-3 ${("showThread" in post) ? "d-block" : "d-none"}`} style={{textDecorationLine:"none"}} href="#">Show this thread</a>
    </li>
  );
};
export default PostItem;
