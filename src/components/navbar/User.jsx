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
                
            <div className=" bg-white shadow-md absolute top-full left-0 w-full ml-6 pb-2">
                <ul className="flex flex-col gap-2">
                    <Option/>
                </ul>
            </div>  )}
        </div>
    
        </>
    );
}

export default User;