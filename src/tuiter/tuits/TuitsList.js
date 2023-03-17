// import tuitsArray from './tuits.json';
import TuitItem from "./TuitItem";
import {useSelector} from "react-redux";

const TuitList = () => {
  const tuitsArray = useSelector(state => state.tuits);
  
  return(
    <ul className="list-group">
      {tuitsArray.map(item => <TuitItem key={item._id} post={item}/>)}
    </ul>
  );
};
export default TuitList;