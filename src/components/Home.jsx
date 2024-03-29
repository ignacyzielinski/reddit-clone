import Button from "./Button";
const Home = () => {
    return (
        <div className="w-310 items-center shadow-md bg-white border border-gray-300 mt-4 pb-2 rounded-md">
            <img src="./src/img/home-banner.png" alt="planety" />
            <div className="flex gap-5">
                <img src="./src/img/snoo-home.png" alt="ziomeczek" className="w-16 mt-[-15px] ml-4" />
                <div className="font-bold text-lg mt-12">Home</div>
            </div>
            <div className="p-4 text-sm">
            Your personal Reddit frontpage. Come here to check in with your favorite communities.
            </div>
            <Button text="Create post" backgroundColor="blue" textColor="white"/>
            <div className="h-2"></div>
            <Button text="Create community" backgroundColor="white" textColor="blue" borderColor="blue"/>
        </div>
        
        
    );
}

export default Home