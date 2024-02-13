import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import SearchBarOption from "./SearchBarOption";
import SearchBarTrending from "./SearchBarTrending";

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
            {isOpen && <div className="bg-white shadow-md absolute w-full right-[0.01em] top-[2.1em] h-[24em] overflow-auto rounded-md">
                <SearchBarOption text="r/react" img="./src/img/react.jpg"/>
                <SearchBarOption text="r/relationship_advice" img="./src/img/relationship_advice.png"/>
                <SearchBarOption text="r/webdev" img="./src/img/webdev.jpg"/>
                <SearchBarOption text="r/entertainment" img="./src/img/entertainment.png"/>
                <div className="border border-gray-200 my-1"></div>
                <p className="text-gray-500 text-xs font-semibold p-2">TRENDING TODAY</p>
                <SearchBarTrending title="Most-watched telecast" content="Super Bowl 2024 Was the Most-Watched Telecast of All Time, Reaching 123.4 Million Viewers" subreddit="r/entertainment" img="./src/img/entertainment.png"/>
                <SearchBarTrending title="Sam Altman on AI risk" content="OpenAI CEO warns that 'societal misalignments' could make artificial intelligence dangerous" subreddit="r/ChatGPT" img="./src/img/chatgpt.jpg"/>
                <SearchBarTrending title="East Coast snowstorm" content="Tuesday Snowstorm Timeline" subreddit="r/boston" img="./src/img/boston.png"/>
                <SearchBarTrending title="Madame Web reactions" content="‘Madame Web’: First Reactions After the Premiere" img="./src/img/entertainment.png" subreddit="r/entertainment"/>
            </div>
                }
        </div>

    );
}

export default DropdownSearchBar;