const UserOption = (props) => {
    return (
        <>
            <div className="flex items-center py-2 hover:bg-gray-200">
                <p className="ml-14">{props.text}</p>    
            </div>
        </>
    );
}

export default UserOption;