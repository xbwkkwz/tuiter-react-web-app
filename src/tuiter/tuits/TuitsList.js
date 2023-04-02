// import tuitsArray from './tuits.json';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import TuitItem from "./TuitItem";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitList = () => {
  const {tuits, loading} = useSelector(state => state.tuitsData);
  
  const dispatch = useDispatch();
  useEffect(() => {dispatch(findTuitsThunk())}, [dispatch]);
  
  return(
    <ul className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}
      {tuits.map(item => <TuitItem key={item._id} post={item}/>)}
    </ul>
  );
};
export default TuitList;