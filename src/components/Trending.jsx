import { BsThreeDots } from "react-icons/bs";
import TrendingIcon from "./TrendingIcon";
import { RxViewHorizontal } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { TfiAnnouncement } from "react-icons/tfi";
const Trending = () => {
    return (
        <>
        <div className="flex bg-white border border-gray-300 w-640 h-1/4 items-center gap-4 px-2 py-4 shadow-md text-gray-500 ">
            <TrendingIcon iconType="best"/>
            <TrendingIcon iconType="hot"/>
            <TrendingIcon iconType="new"/>
            <TrendingIcon iconType="top"/>
            <BsThreeDots />
            <div className="flex ml-auto text-2xl p-1 hover:bg-gray-300 ">
                <RxViewHorizontal className="place-self-end mr-1"/>
                <IoIosArrowDown />
            </div>
            
        </div>

        </>
    );
}

export default Trending;