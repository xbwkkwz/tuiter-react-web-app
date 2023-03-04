import postsArray from './posts.json';
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
  return(
    <ul className="list-group">
      {postsArray.map(item => <PostSummaryItem key={item._id} post={item}/>)}
    </ul>
  );
};
export default PostSummaryList;
