const checkAt = (post) => {
  let list = [];
  let start = 0;
  let find = false;
  for (let i=0; i<post.content.length; i++) {
    if (!find && post.content[i] === '@') {
      list.push(`${post.content.substring(start, i)}`);
      list.push('<a class="wd-post-link" href="#">');
      start = i;
      find = true;
    }
    if (find && post.content[i] === ' ') {
      list.push(`${post.content.substring(start, i)}`);
      list.push('</a>');
      start = i;
      find = false;
    }
  }
  list.push(`${post.content.substring(start, post.content.length)}`);
  if (find) {
    list.push('</a>');
  }
  return(list.join(''));
}

const checkLink = (post) => {
  let list = [];
  if (post.link !== '') {
    list.push(`<a class="wd-post-link" href="#"> ${post.link}</a>`);
  }
  return(list.join(''));
}

const checkImg = (post) => {
  let list = [];
  if (post.image !== '') {
    if (post.titleExternal !== '') {
      list.push(`<div class="list-group-item px-0 py-0"><img class="w-100 rounded-top" id="wd-post-img" src=${post.image} alt=""></div>`);
    }
    else {
      list.push(`<div class="list-group-item px-0 py-0"><img class="w-100 rounded-3" id="wd-post-img" src=${post.image} alt=""></div>`);
    }
  }
  if (post.titleExternal !== '') {
    list.push(`
      <div class="list-group-item" id="wd-post-img-external">
        <div><a class="wd-title" href="#">${post.titleExternal}</a></div>
        <div class="text-dark">${post.contentExternal}</div>
        <div class="text-secondary"><i class="fa-solid fa-link me-1"></i>${post.linkExternal}</div>
      </div>
    `);
  }
  return(list.join(''));
}

const PostItem = (post) => {
  return(`
    <div class="list-group-item">
      <!-- top post -->
      <div class="d-flex mb-2">
        <!-- logo -->
        <div class="me-3"><img class="wd-logo rounded-circle" src=${post.avatarIcon} alt=""></div>

        <!-- post content -->
        <div class="w-100">
          <div class="d-flex justify-content-between">
            <div class=""><a class="wd-userName fw-bold me-1" href="#">${post.userName}</a>
              <i class="fa-solid fa-circle-check me-1" title="Verified User"></i>
              <span class="text-secondary">@${post.handle} · ${post.time}</span></div>
            <a href="#" title="More"><i class="fa-solid fa-ellipsis text-secondary"></i></a>
          </div>

          <div class="mb-2">${checkAt(post)}${checkLink(post)}</div>
          
          <div class="list-group">${checkImg(post)}</div>
        </div>
        
      </div>

      <!-- bottom icons -->
      <div class="d-flex justify-content-between mx-5 px-3 text-secondary">
        <div><a class="wd-post-button" href="#" title="Reply"><i class="fa-regular fa-comment me-3"></i>${post.replies}</a></div>
        <div><a class="wd-post-button" href="#" title="Repost"><i class="fa-solid fa-retweet me-3"></i>${post.reposts}</a></div>
        <div><a class="wd-post-button" href="#" title="Like"><i class="fa-regular fa-heart me-3"></i>${post.likes}</a></div>
        <div><a class="wd-post-button" href="#" title="Share"><i class="fa-solid fa-arrow-up-from-bracket me-3"></i></a></div>
      </div>
    </div>
  `);
}
export default PostItem;