import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <div className="w-full h-10 sm:h-24 bg-slate-600 flex items-center justify-between">
            <div className="left flex flex-row justify-center items-center pl-5">
                <ul className="flex flex-row justify-between font-serif text-xs  gap-5   sm:text-teal-300 text-cyan-500 md:text-2xl">
                    <li className="hover:text-white ">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="hover:text-white">
                        <Link to='/about-us'>About Us</Link>
                    </li>
                    <li className="hover:text-white">
                        <Link  to='/contact-us'>Contact Us</Link>
                    </li>
                </ul>
            </div>
            <div className="right mr-5 w-56 h-16 border-[4px] rounded-full border-black flex ">
                <div className="w-28 h-15 border-r-[5px] text-center flex justify-center border-black transition-colors hover:bg-green-300 rounded-full">
                   <h2 className="text-2xl font-bold pt-2 text-green-500"> <Link  to='/login'>Log in</Link></h2>
                </div>
                <h2 className="text-2xl font-bold pt-2 text-green-600"> <Link  to='/sign-up'>Sign Up</Link></h2>
            </div>
        </div>
     );
}
 
export default Header;