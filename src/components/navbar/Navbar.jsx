import { BsReddit } from "react-icons/bs";
import Dropdown from "./Dropdown";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { TfiAnnouncement } from "react-icons/tfi";
import User from "./User";
const Navbar = () => {


    return (
        <div className="fixed top-0 w-full z-10 bg-white flex items-center py-1 select-none">
            <BsReddit className="text-5xl text-orange-600 ml-4"/>
            <div className="text-orange-600 text-4xl font-bold ml-2">reddit</div>
            <Dropdown/>
            <input type="text" placeholder="Search Reddit" className="text-xl ml-4 w-1/2 p-2 rounded-2xl bg-gray-200 border border-gray-400 mr-4"/>
            <div className="flex gap-4 text-2xl">
                <HiOutlineArrowUpRight className="hover:bg-gray-200"/>
                <IoChatbubbleEllipsesOutline className="hover:bg-gray-200"/>
                <IoIosNotificationsOutline className="hover:bg-gray-200"/>
                <FaPlus className="hover:bg-gray-200"/>
            </div>
            <div className="flex ml-4 bg-gray-100 p-2 items-center rounded-2xl hover:bg-gray-300">
                <TfiAnnouncement className="mr-2 "/><div className="font-medium">Advertise</div>
            </div>
            <div>
                <User/>
            </div>
        </div>
    );
}

export default Navbar;