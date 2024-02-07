import PostWrapper from "./PostWrapper";
import RightWrapper from "./RightWrapper";
import Navbar from "./navbar/Navbar";
const Wrapper = () => {
    return (
    <>  
        <div className="relative">
            <div className="h-20"></div>
            <Navbar/>
            <div className=" flex gap-8 justify-center">
                <PostWrapper/>
                <RightWrapper/>
            </div>
        </div>
    </>        
    );
}

export default Wrapper;