import whoArray from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
  return(
    <ul className="list-group">
      <li className="list-group-item"><h3>Who to follow</h3></li>
      {whoArray.map(item => <WhoToFollowListItem key={item._id} who={item}/>)}
    </ul>
  );
};
export default WhoToFollowList;
