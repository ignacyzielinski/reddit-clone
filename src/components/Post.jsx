import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { GoComment } from "react-icons/go";
import { FaShare } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
import { useState } from "react";
import { PiArrowFatDownThin } from "react-icons/pi";
import { PiArrowFatUpThin } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
const Post = (props) => {
    const [count, setCount] = useState(parseInt(props.count));
    
    const increaseCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decreaseCount = () => {
        setCount(prevCount => prevCount - 1);
    };
    return (
        <div className="bg-white border border-gray-300 w-640 items-center gap-4 shadow-md hover:border-gray-400 flex-col mt-2 mb-2 rounded-md ">
            <div className="flex">
                <div className="text-center bg-gray-100 px-3 pt-4">
                    <div className="mt-1 mb-1 text-lg hover:text-orange-500" ><PiArrowFatUpThin onClick={increaseCount}/></div>
                    <div className="font-bold text-[0.7em]">{count}</div>
                    <div className="mt-1 text-lg hover:text-blue-500" ><PiArrowFatDownThin onClick={decreaseCount}/></div>
                </div>
                <div >
                    <div className="flex text-sm pt-4 ml-2 px-2">
                        <div className="ml-2">
                            <div className="flex items-center">
                                <img src={props.icon} className="w-4 h-4 mr-2 rounded-full"/>
                                <div className="mr-1">{props.subreddit}</div>
                                <div className="text-gray-400">· posted by {props.user}</div>
                            </div>
                            <div className="flex">
                                <div className="mt-1 text-xl font-bold mb-2 ml-1">{props.title}</div>
                            </div>
                            <div>{props.content}</div>
                        </div>
                    </div>
                    <div className="flex text-gray-500 mr-auto ml-2">
                        <div className="flex p-2 hover:bg-gray-200 hover:cursor-default items-center">
                        <GoComment className="text-lg "></GoComment>
                        <div className="text-sm ml-1 ">{props.comments} Comments</div>
                    </div>
                    <div className="flex p-2 hover:bg-gray-200 hover:cursor-default items-center">
                        <FaShare className="text-lg"/>
                        <div className="text-sm ml-1 ">Share</div>
                    </div>
                    <div className="flex p-2 hover:bg-gray-200 hover:cursor-default items-center">
                        <CiSaveDown2 className="text-lg"/>
                        <div className="text-sm ml-1 ">Save</div>
                    </div>
                    <div className="flex p-2 hover:bg-gray-200 hover:cursor-default items-center">
                        <BsThreeDots className="items-center"/>
                    </div>
                    
                </div>
                </div>
            </div>
            
        </div>
    

    );
}

export default Post;