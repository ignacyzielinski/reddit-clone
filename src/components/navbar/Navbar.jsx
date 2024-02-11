import { BsReddit } from "react-icons/bs";
import Dropdown from "./Dropdown";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { TfiAnnouncement } from "react-icons/tfi";
import User from "./User";
import DropdownSearchBar from "./DropdownSearchBar";
const Navbar = () => {


    return (
        <div className="fixed top-0 w-full z-10 bg-white flex items-center select-none">
            <BsReddit className="text-3xl text-orange-600 ml-6"/>
            <div className="text-orange-600 text-2xl font-bold ml-2">reddit</div>
            <Dropdown/>
            <DropdownSearchBar/>
            <div className="flex gap-4 text-xl">
                <HiOutlineArrowUpRight className="hover:bg-gray-200"/>
                <IoChatbubbleEllipsesOutline className="hover:bg-gray-200"/>
                <IoIosNotificationsOutline className="hover:bg-gray-200"/>
                <FaPlus className="hover:bg-gray-200"/>
            </div>
            <div className="flex ml-4 bg-gray-100 items-center rounded-full p-2 hover:bg-gray-400">
                <TfiAnnouncement/>
            </div>
            <div>
                <User/>
            </div>
        </div>
    );
}

export default Navbar;