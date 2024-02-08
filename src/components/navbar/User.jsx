import { IoMdHome } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import Option from "./Option";
const User = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    return (
        <>
        <div className="flex flex-col relative hover:border-gray-200">
            <div className="flex ml-6 items-center p-1 hover:border hover:border-gray-200 rounded-md "onClick={toggleDropdown}>
                <img src="./src/img/engineer-head.png" className="w-10"  />
                <div className="flex flex-col">
                    <div className="text-md font-bold ml-2 mr-auto">username</div>
                    <div className="text-md ml-2 mr-auto">1 karma</div>
                </div>
                <MdKeyboardArrowDown className="ml-4"/>
            </div>
            {isOpen && (
                
            <div className=" bg-white shadow-md absolute top-full w-full ml-6 pb-2">
                <div className="flex flex-col gap-2">
                    <div className="h-2"></div>
                    <p className="text-gray-500 font-medium ml-10">My Stuff</p>
                    <Option text="Online Status"/>
                    <Option text="Profile"/>
                    <Option text="Create Avatar"/>
                    <Option text="Profile"/>
                    <p className="text-gray-500 font-medium ml-10">View Options</p>
                    <Option text="Dark Mode"/>
                    <div className="border border-gray-200"></div>
                    <Option text="Create a Community"/>
                    <Option text="Advertise on Reddit"/>
                    <Option text="Premium"/>
                    <Option text="Explore"/>
                    <Option text="Help Center"/>
                    <Option text="More"/>
                    <Option text="Terms & Policies"/>
                    <Option text="User Agreement"/>
                    <Option text="Privacy Policy"/>
                    <Option text="Content Policy"/>
                    <Option text="Moderator Code of Conduct"/>
                    <div className="border border-gray-200"></div>

                </div>
            </div>  )}
        </div>
    
        </>
    );
}

export default User;