import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
const DropdownSearchBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)

    }
    const [isHovered, setIsHovered] = useState(false);

    const toggleHover = () => {
        setIsHovered(!isHovered);
    };
    

    return (
        <div className={`text-xl ml-4 grow p-2 rounded-2xl bg-gray-100 mr-4 flex items-center hover:bg-white ${isHovered && "border border-blue-500"} ${isOpen && "rounded-b-none"}`} onMouseEnter={toggleHover} onMouseLeave={toggleHover} >
            <IoIosSearch className="text-2xl mx-2"/>
            <input type="text" placeholder="Search Reddit" onClick={toggleDropdown} className={`w-full bg-gray-100 text-lg decoration ${isHovered && "bg-white"} `}  /> 
        </div>

    );
}

export default DropdownSearchBar;