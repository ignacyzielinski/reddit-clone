import RecentPost from "./RecentPost";
const RecentPosts = () => {
    return (
        <div className="w-310 items-center shadow-md bg-white border border-gray-300 mt-4 pb-2 rounded-md">
            <p className="ml-4 mt-2 uppercase">Recent posts</p>
            <RecentPost/>
            <RecentPost/>
            <RecentPost/>
            <RecentPost/>
            <RecentPost/>
        </div>
    );
}

export default RecentPosts;