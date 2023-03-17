const PostSummaryItem = (
  {
    post = {
      "topic": "Space",
      "userName": "SpaceX",
      "time": "2h",
      "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
      "avatarIcon": "tesla-logo.jpg"
    }
  }
  ) => {
  return(
    <li className="list-group-item">
      <div className="row">
        <div className="col-10">
          <div className="text-secondary">{post.topic}</div>
          <div><span className="fw-bolder">{post.userName}</span> <i className="bi bi-patch-check-fill text-primary"></i> <span className="text-secondary">· {post.time}</span></div>
          <div>{post.title}</div>
        </div>
        <div className="col-2 px-0">
          <img className="w-100 rounded-3" src={`/images/${post.avatarIcon}`} alt=""/>
        </div>
      </div>
    </li>
  );
};
export default PostSummaryItem;
