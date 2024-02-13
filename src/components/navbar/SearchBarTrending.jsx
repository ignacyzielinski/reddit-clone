import { IoIosTrendingUp } from "react-icons/io";

const SearchBarTrending = (props) => {
    return (
        <div className="hover:bg-gray-100">
            <div className="flex pt-2">
                <IoIosTrendingUp className="ml-2 text-blue-500"/>
                <p className="ml-2 text-sm">{props.title}</p>
            </div>
            <div>
                <p className="text-xs text-gray-500 ml-10 my-1">{props.content}</p>
            </div>
            <div className="flex ml-2 text-xs items-center mb-4">
                <img src={props.img} className="w-4 h-4 ml-3 rounded-full"/>
                <p className="ml-1">{props.subreddit} and more</p>
            </div>
            <div className="border border-gray-200 "></div>
        </div>
    );
}

export default SearchBarTrending;