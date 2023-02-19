import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./who.js";

const WhoToFollowList = () => {
  return(`
    <div class="wd-follow-list list-group mb-2">
      <div class="list-group-item fw-bold">Who to follow</div>
      ${whos.map(
        who => {return(WhoToFollowListItem(who))}
        ).join('')}

    </div>

    <div class="wd-follow-term"></div>
  `);
}
export default WhoToFollowList;