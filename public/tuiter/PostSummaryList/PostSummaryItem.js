const PostSummaryItem = (post) => {
  return(`
    <div class="d-flex list-group-item">
      <div class="wd-mc-left w-100 me-2">
        <div class="text-secondary">${post.topic}</div>
        <div><a class="wd-userName fw-bold me-1" href="#">${post.userName}</a>
             <i class="fa-solid fa-circle-check me-1" title="Verified User"></i>
             <span class="text-secondary">· ${post.time}</span></div>
        <div><a class="wd-title fw-bold" href="#">${post.title}</a></div>
        
      </div>

      <div class="wd-mc-right"><img class="wd-post-summary-img rounded-3" src=${post.image} alt=""></div>
    </div>
  `);
}
export default PostSummaryItem;