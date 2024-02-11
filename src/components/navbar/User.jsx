import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoCreateOutline } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import { GoTelescope } from "react-icons/go";
import { CiCircleInfo } from "react-icons/ci";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { MdKeyboardArrowUp } from "react-icons/md";
import { TbLicense } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";

import UserOption from "./UserOption";
const User = () => {

    const [TermsIsOpen, setTermsIsOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [MoreIsOpen, setMoreIsOpen] = useState(false);
    const toggleTerms = () => {
        setTermsIsOpen(!TermsIsOpen);
    }
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    const toggleMoreOpen = () => {
        setMoreIsOpen(!MoreIsOpen)
    }
    
    return (
        <>
        <div className="flex flex-col relative hover:border-gray-200">
            <div className="flex ml-6 items-center p-1 hover:border text-sm mr-4 hover:border-gray-200 border-white border rounded-md "onClick={toggleDropdown}>
                <img src="./src/img/engineer-head.png" className="w-10"  />
                <div className="flex flex-col">
                    <div className="text-md font-bold ml-2 mr-auto">username</div>
                    <div className="text-md ml-2 mr-auto">1 karma</div>
                </div>
                <MdKeyboardArrowDown className="ml-20"/>
            </div>
            {isOpen && (
                
            <div className="bg-white shadow-md absolute top-full ml-6 right-4 pb-2 w-240 mt-1 rounded-md overflow-auto dropdown-user" >
                <div className="flex flex-col">
                    <div className="h-2"></div>
                        <div className="flex items-center py-2 text-gray-500">
                            <FaRegUserCircle className="mx-4 text-xl"/>
                            <p className="ml-1">My Stuff</p>    
                        </div>
                        <div className="flex items-center py-2 hover:bg-gray-200">
                            <p className="ml-14 ">Online Status</p>
                            <label class="ml-4 relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer"/>
                            <div class="w-11 h-6 bg-gray-200  rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky"></div>
                            </label>
                        </div>
                        <div className="flex items-center py-2 hover:bg-gray-200">
                            <p className="ml-14">Profile</p>    
                        </div>
                        <div className="flex items-center py-2 hover:bg-gray-200">
                            <p className="ml-14">Create Avatar</p>    
                        </div>
                        <div className="flex items-center py-2 hover:bg-gray-200">
                            <p className="ml-14">User Settings</p>    
                        </div>
                        <div className="border border-gray-200 my-1"></div>
                        <div className="text-gray-500 flex mt-1">
                            <IoEyeOutline className="text-xl mx-4"/>
                            <div className="ml-1">View Options</div>
                        </div>
                        <div className="flex items-center py-2 hover:bg-gray-200 mt-1">
                            <p className="ml-14 ">Dark Mode</p>
                            <label class="ml-8 relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer"/>
                            <div class="w-11 h-6 bg-gray-200  rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky"></div>
                            </label>
                        </div>
                        <div className="border border-gray-200 my-1"></div>
                        <div className="flex py-2 hover:bg-gray-200">
                            <IoCreateOutline className="text-xl mx-4"/>
                            <div className="ml-1">Create a Community</div>
                        </div>
                        <div className="flex py-2 hover:bg-gray-200">
                            <TfiAnnouncement className="text-xl mx-4"/>
                            <div className="ml-1">Advertise on Reddit</div>
                        </div>
                        <div className="flex py-2 hover:bg-gray-200">
                            <FaShieldAlt className="text-xl mx-4"/>
                            <div className="ml-1">Premium</div>
                        </div>
                        <div className="flex py-2 hover:bg-gray-200">
                            <GoTelescope className="text-xl mx-4"/>
                            <div className="ml-1">Explore</div>
                        </div>
                        <div className="flex py-2 hover:bg-gray-200">
                            <HiOutlineQuestionMarkCircle className="text-xl mx-4"/>
                            <div className="ml-1">Help Center</div>
                        </div>
                        <div className="flex py-2 hover:bg-gray-200" onClick={toggleMoreOpen}>
                            <CiCircleInfo className="text-xl mx-4"/>
                            <div className="ml-1">More</div>
                            {!MoreIsOpen ?
                            <MdKeyboardArrowDown className="text-xl ml-auto mr-4" /> : 
                            <MdKeyboardArrowUp className="text-xl ml-auto mr-4"/>
                            }
                        </div>
                        {MoreIsOpen && 
                        <>
                            <UserOption text="Reddit iOS"/>
                            <UserOption text="Reddit Android"/>
                            <UserOption text="Rereddit"/>
                            <UserOption text="Best Communities"/>
                            <UserOption text="Communities"/>
                            <UserOption text="About Reddit"/>
                            <UserOption text="Blog"/>
                            <UserOption text="Careers"/>
                            <UserOption text="Press"/>
                            <UserOption text="Visit Old Reddit"/>

                        </>
                        }
                        <div className="flex py-2 hover:bg-gray-200" onClick={toggleTerms}>
                            <TbLicense className="text-xl mx-4"/>
                            <div className="ml-1">Terms & Conditions</div>
                            {!TermsIsOpen ?
                            <MdKeyboardArrowDown className="text-xl ml-auto mr-4" /> : 
                            <MdKeyboardArrowUp className="text-xl ml-auto mr-4"/>
                            }
                        </div>
                        {TermsIsOpen && 
                        <>
                            <UserOption text="User Agreement"/>
                            <UserOption text="Privacy Policy"/>
                            <UserOption text="Content Policy"/>
                            <UserOption text="Moderator Code of Conduct"/>
                            
                        </>
                        }
                        <div className="flex py-2 hover:bg-gray-200">
                            <LuLogOut className="text-xl mx-4"/>
                            <div className="ml-1">Log out</div>
                        </div>
                        <p className="p-4 text-sm text-gray-500">
                        Reddit, Inc. © 2024. All rights reserved.
                        </p>
                </div>
            </div>  )}
        </div>
    
        </>
    );
}

export default User;