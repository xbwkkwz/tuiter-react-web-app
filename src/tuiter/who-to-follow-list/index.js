// import whoArray from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
  const whoArray = useSelector((state) => state.who);
    
  return(
    <ul className="list-group">
      <li className="list-group-item"><h5>Who to follow</h5></li>
      {whoArray.map(item => <WhoToFollowListItem key={item._id} who={item}/>)}
    </ul>
  );
};
export default WhoToFollowList;
