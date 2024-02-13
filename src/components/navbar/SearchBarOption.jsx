import { IoCloseCircleOutline } from "react-icons/io5";

const SearchBarOption = (props) => {
    return (
        <>
            <div className="p-3 flex hover:bg-gray-100 items-center">
                <img src={props.img} className="w-6" />
                <div className="ml-2 text-sm">{props.text}</div>
                <IoCloseCircleOutline className="ml-auto text-xl"/>
            </div>
        </>
    );
}

export default SearchBarOption;