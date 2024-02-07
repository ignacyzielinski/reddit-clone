import RedditPremium from "./RedditPremium";
import Home from "./Home";
import RecentPosts from "./RecentPosts";
import RecentPost from "./RecentPost";
const RightWrapper = () => {
    return (
        <div>
            <RedditPremium/>
            <Home/>
            <RecentPosts/>
        </div>
    );
}

export default RightWrapper;