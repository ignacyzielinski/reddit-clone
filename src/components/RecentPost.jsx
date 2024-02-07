import { PiFileText } from "react-icons/pi";
const RecentPost = () => {
    return (
        <div className="my-4 border-b-2 pb-4 mx-4">
            <div className="flex gap-4">
                        <div className="flex justify-center align-middle border border-gray-200 py-6 px-8">
                            <PiFileText/>
                        </div>
                        <div>
                        <div className="overflow-hidden text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
                        <div className="text-xs text-gray-500">500 points · 20 comments · 1 lut</div>
                    <div/>
                </div>
            </div>
        </div>
    );
}

export default RecentPost;