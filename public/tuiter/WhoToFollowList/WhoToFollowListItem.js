const WhoToFollowListItem = (who) => {
  return(`
    <div class="d-flex list-group-item align-items-center">
      <div class=""><img class="wd-logo rounded-circle" src=${who.avatarIcon} alt=""></div>

      <div class="w-100 ps-3">
        <div class=""><a class="wd-userName fw-bold me-2" href="#">${who.userName}</a><i class="fa-solid fa-circle-check" title="Verified User"></i></div>
        <div class="">@${who.handle}</div>
      </div>

      <div class=""><button class="btn btn-primary rounded-pill" type="button" value="follow">Follow</button></div>
    </div>
  `);
}
export default WhoToFollowListItem;
