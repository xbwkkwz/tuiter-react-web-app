// import postsArray from './posts.json';
import PostSummaryItem from "./post-summary-item";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
  const postsArray = useSelector(state => state.tuits);

  return(
    <ul className="list-group">
      {postsArray.map(item => <PostSummaryItem key={item._id} post={item}/>)}
    </ul>
  );
};
export default PostSummaryList;
