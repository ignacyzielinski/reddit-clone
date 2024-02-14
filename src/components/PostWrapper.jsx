import Trending from "./Trending";
import NewPost from "./NewPost";
import Post from "./Post";
const PostWrapper = () => {
    return (
        <div  className="flex-col gap-2 flex">
            <NewPost/>
            <Trending/>
            <Post icon ="./src/img/react.png" count ="23" subreddit="r/react" user="randomuser" title="How to create a group project?" content ="Have you ever experienced the pure agony of a group project gone awry? If you haven't, count yourself lucky, my friend, because let me tell you, it's like diving headfirst into a pit of chaos and frustration.

        Picture this: you're assigned a group project, and immediately you're hit with a cocktail of emotions – excitement, dread, and a hint of impending doom. You gather your team, hopeful that together you'll conquer the task at hand and emerge victorious. Oh, how naive you were!

        The first few meetings start off with a semblance of productivity. Ideas are tossed around, plans are made, and there's a glimmer of hope that maybe, just maybe, this won't be as bad as you thought. But oh, how quickly that hope dwindles.

        As time ticks by, it becomes painfully obvious that your group is about as organized as a herd of cats on roller skates.    Communication? Forget about it! Half of the group disappears into the abyss, only to resurface days before the deadline with   excuses that would make even the most seasoned procrastinator cringe." comments="32"/>
            <Post/>
            <Post/>
        </div>
    );
}

export default PostWrapper;