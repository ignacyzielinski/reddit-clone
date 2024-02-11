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
        <div className={`relative text-xl ml-4 grow p-2 rounded-2xl bg-gray-100 mr-6 flex items-center hover:bg-white border  ${isHovered && "border border-blue-500"} ${isOpen && "rounded-b-none"}`} onMouseEnter={toggleHover} onMouseLeave={toggleHover} >
            <IoIosSearch className="text-xl mx-2 text-gray-500"/> 
            <input type="text" placeholder="Search Reddit" onClick={toggleDropdown} className={`w-full bg-gray-100 text-sm decoration ${isHovered && "bg-white"}  focus:outline-none`}  />
            {isOpen && <div className="bg-white shadow-md absolute top-full w-full ">ddddd</div>}
            
        </div>

    );
}

export default DropdownSearchBar;