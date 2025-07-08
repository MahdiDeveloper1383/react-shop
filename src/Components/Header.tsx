import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <div className="w-full h-20 bg-slate-600 flex justify-between">
            <div className="left flex flex-row justify-center items-center pl-5">
                <ul className="flex flex-row justify-between gap-7 text-3xl">
                    <li className="hover:text-white">
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                    <Link to='/'>Home</Link>
                    </li>
                    <li>
                    <Link to='/'>Home</Link>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Header;