import Trending from "./Trending";
import NewPost from "./NewPost";
import Post from "./Post";
const PostWrapper = () => {
    return (
        <div  className="flex-col gap-2 flex">
            <NewPost/>
            <Trending/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}

export default PostWrapper;