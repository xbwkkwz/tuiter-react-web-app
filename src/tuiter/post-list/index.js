import postsArray from './posts.json';
import PostItem from "./post-item";

const PostList = () => {
  return(
    <ul className="list-group">
      {postsArray.map(item => <PostItem key={item._id} post={item}/>)}
    </ul>
  );
};
export default PostList;