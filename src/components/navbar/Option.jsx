const Option = (props) => {


    return (
        <>
            <li className="flex hover:bg-gray-200 items-center">
                <img src={props.image} className="w-6 ml-2 py-1"/>
                <div className="ml-2 text-sm">{props.text}</div>
            </li>
        </>
            
        
    );
}

export default Option;