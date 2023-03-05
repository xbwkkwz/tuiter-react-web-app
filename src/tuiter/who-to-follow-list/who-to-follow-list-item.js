const WhoToFollowListItem = (
  {
    who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa-logo.jpg' }
  }
  ) => {
  return(
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-2">
          <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`} alt=""/>
        </div>
        <div className="col-8">
          <div className="fw-bold">{who.userName} <i className="bi bi-patch-check-fill text-primary"></i></div>
          <div>@{who.handle}</div>
        </div>
        <div className="col-2">
          <button className="btn btn-primary rounded-pill float-end">Follow</button>
        </div>
      </div>
    </li>
  );
};
export default WhoToFollowListItem;