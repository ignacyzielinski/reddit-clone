import { CiImageOn } from "react-icons/ci";
import { FaLink } from "react-icons/fa6";
import { useState } from "react";
const NewPost = () => {
    const [isHovered, setHovered] = useState(false)
    function HoverHandler(){
        setHovered(!isHovered)
    }
    return (
        <div className="flex  bg-white border border-gray-300 w-640 h-1/4 items-center gap-4 px-2 py-1 shadow-md rounded-md">
            <img src="./src/img/engineer-head.png" alt="avatar" className="w-10"/>
            <input type="text" placeholder="Create post" className={`bg-gray-100 text-sm p-1 w-4/5 border border-gray-200 rounded-sm focus:outline-none ${isHovered && "border border-blue-500 bg-white"} `} onMouseEnter={HoverHandler} onMouseLeave={HoverHandler} />
            <div className="text-gray-500 flex text-2xl gap-2 ">
            <CiImageOn className="hover:bg-gray-300"/>
            <FaLink className="hover:bg-gray-300"/>
            </div>
        </div>
    );
}

export default NewPost;