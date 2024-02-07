import { FaShieldHalved } from "react-icons/fa6";
import Button from "./Button";
const RedditPremium = () => {
 
    return (
        <div className="bg-white border border-gray-300 w-310 items-center gap-4 shadow-md text-gray-500 pb-2">
            <div className="flex mb-2 p-4">
                <FaShieldHalved className='text-orange-600 text-4xl mr-4'/>
                <div className="text-sm text-black">
                    <p className="font-bold">Reddit premium</p>
                    <p>The best Reddit experience</p>
                </div>
            </div>
            <Button text="Try now" backgroundColor="orange" textColor="white" ></Button>
        </div>
    );
}

export default RedditPremium;