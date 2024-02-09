import { FaRocket } from "react-icons/fa6";
import { FaFireAlt } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import { IoPodiumOutline } from "react-icons/io5";
import { useState } from "react";
const TrendingIcon = ({iconType}) => {
    let icon = null;
    let tekst = null;
    switch(iconType){
        case 'best':
            icon=<FaRocket/>;
            tekst="Best"
            break;
        case 'hot':
            icon=<FaFireAlt/>;
            tekst = "Hot"
            break;
        case 'new':
            icon = <CiSun/>
            tekst="New"
            break;
        case 'top':
            icon=<IoPodiumOutline/>
            tekst="top"
            break;
    }
// const [clicked, setClicked] = useState(false)
// function clickHandler(){
//     setClicked(true)
// }

    return (
        <div className="text-2xl flex p-1 hover:bg-gray-100 hover:text-blue-700 cursor-default ">
            {icon}
            <div className="text-sm uppercase font-bold ml-2">{tekst}</div>
        </div>
    );
}

export default TrendingIcon;