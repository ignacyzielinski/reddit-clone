import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { GoComment } from "react-icons/go";
import { FaShare } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
import { useState } from "react";

const Post = () => {
    const [count, setCount] = useState(0);
    function decreaseCount(){
        setCount(prevCount => prevCount-1)
    }
    function increaseCount(){
       setCount(prevCount=>prevCount+1)
    }
    return (
        <div className="flex bg-white border border-gray-300 w-640 items-center gap-4 px-2 py-4 shadow-md justify-start hover:border-gray-400 flex-col mt-2 mb-2 rounded-md">
            <div className="flex">
                <div className="text-center">
                    <div className="mt-1 mb-1 text-lg hover:text-orange-500" > <FaLongArrowAltUp onClick={increaseCount}/></div>
                    <div className="font-bold">{count}</div>
                    <div className="mt-1 text-lg hover:text-blue-500" ><FaLongArrowAltDown onClick={decreaseCount}/></div>
                </div>
                <div className="flex">
                    <div className="flex text-sm">
                        <div className="ml-2">
                            <div className="flex">
                                <div className="mr-1">r/panda</div>
                                <div className="text-gray-400">· posted by user</div>
                            </div>
                            <div className="mt-1 text-xl font-bold mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, ut.</div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, debitis. Aliquam ipsum praesentium adipisci placeat molestias, eos, atque asperiores odit beatae labore ad suscipit debitis necessitatibus sint. Sunt atque quaerat consequuntur natus corrupti impedit possimus perferendis iste. Dolore facilis autem blanditiis nostrum animi quaerat labore earum? Debitis, temporibus distinctio qui id sit natus maxime fuga molestiae voluptas illo quisquam consequuntur possimus amet et explicabo sequi! Vitae, tempore libero nam sunt qui sit corrupti doloribus fuga veniam eos nemo culpa. Nisi voluptatem excepturi soluta nam eligendi. Ab eaque ut voluptate porro, ducimus reiciendis excepturi iure quod. In voluptatem ipsa accusantium id?</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-start text-gray-500 mr-auto ml-4">
                <div className="flex p-2 hover:bg-gray-200 hover:cursor-default">
                    <GoComment className="text-lg "></GoComment>
                    <div className="text-sm ml-1 ">21 Comments</div>
                </div>
                <div className="flex p-2 hover:bg-gray-200 hover:cursor-default">
                    <FaShare className="text-lg"/>
                    <div className="text-sm ml-1 ">Share</div>
                </div>
                <div className="flex p-2 hover:bg-gray-200 hover:cursor-default">
                    <CiSaveDown2 className="text-lg"/>
                    <div className="text-sm ml-1 ">Save</div>
                </div>
            </div>
        </div>
    

    );
}

export default Post;