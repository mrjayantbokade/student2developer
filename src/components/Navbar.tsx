
const Navbar = () => {
    return (
        <nav className="z-50 px-5 sm:px-16 py-4 flex justify-between items-center ">
            <div className="text-white font-sora brightness-125 text-3xl font-black sm:font-bold">S<span className={`text-roseMain`}>2</span>D</div>
            <ul className="hidden md:flex space-x-10 text-sm text-white font-sora">
                <li className="hover:text-roseMain  cursor-pointer">Roadmaps</li>
                <li className="hover:text-roseMain  cursor-pointer">Community</li>
                <li className="hover:text-roseMain  cursor-pointer">Events</li>
                <li className="hover:text-roseMain text-roseMain cursor-pointer shake-effect">Courses</li>
            </ul>
            <button className="bg-roseMain text-[16px] text-white h-10 font-inter font-semibold py-2 px-4 rounded-lg ">
                Log In
            </button>
        </nav>

    );
};

export default Navbar;
