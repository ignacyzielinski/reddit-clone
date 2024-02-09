import { IoMdHome } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState, useEffect } from "react";
import Option from "./Option";
const Dropdown = () => {

    const Dropdown = () => {
        const [isOpen, setIsOpen] = useState(false);
    
        useEffect(() => {
            const handleKeyDown = (event) => {
                if (event.key === `Escape`) {
                    setIsOpen(false);
                }
            };
    
            document.addEventListener('keydown', handleKeyDown);
    
            return () => {
                document.removeEventListener('keydown', handleKeyDown);
            };
        }, [isOpen]);
    
    

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    return (
        <>
        <div className="flex flex-col relative">
            <div className={`flex ml-6 items-center p-1 ${isOpen ? '' : 'hover:border hover:border-gray-200'} rounded-md`} onClick={toggleDropdown} >
                <IoMdHome className="text-3xl" />
                <div className="text-md font-bold ml-2 mr-auto">Home</div>
                <MdKeyboardArrowDown className="ml-36"/>
            </div>
            {isOpen && (
                
            <div className=" bg-white shadow-md absolute top-full w-full ml-6 pb-2">
                <div className="flex flex-col gap-2">
                    <input type="text"  placeholder="Filter" className="mx-4 my-2 bg-gray-100 p-1 border border-solid border-gray-300"/>
                    <p className="text-gray-500 font-medium text-xs ml-4">YOUR COMMUNITIES</p>
                    <Option text="Create community" image="./src/img/plus.png"/>
                    <Option text="r/panda" image="./src/img/engineer-head.png"></Option>
                    <Option text="r/react" image="./src/img/react.png"></Option>
                    <Option text="r/webdev" image="./src/img/webdev.png" ></Option>
                    <p className="text-gray-500 font-medium text-xs ml-4">FEEDS</p>
                    <Option text="Home" image="./src/img/home.png" ></Option>
                    <Option text="Popular" image="./src/img/popular.png" ></Option>
                    <Option text="Best" image="./src/img/trending.png"></Option>
                </div>
            </div>  )}
        </div>
    
        </>
    );
}
}
export default Dropdown;