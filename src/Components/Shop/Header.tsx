import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useCart } from "../../Hooks/Carthook";


const Header = () => {
    const { user,setUser } = useContext(UserContext)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { cart } = useCart()
    useEffect(() => {
        setIsLoggedIn(!!user)
    }, [user])
    const handleLogout = ()=>{
        setUser(null)
    }
    return (
     <div className="w-[648px] md:w-full h-12  mb-4 sm:h-20 lg:w-full bg-slate-600 flex items-center justify-between px-5">
      {/* Left side */}
      <ul className="flex flex-row gap-3 lg:gap-6 font-bold text-xl md:text-xl lg:text-2xl text-cyan-500">
        <li className="hover:text-white">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-white">
          <Link to="/about-us">About Us</Link>
        </li>
        <li className="hover:text-white">
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-2">
        {isLoggedIn ? (
          <>
            {/* Cart */}
            <Link to="/cart" className="flex items-center gap-2 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h18l-1.68 9.39a2.25 2.25 0 01-2.23 1.86H6.91a2.25 2.25 0 01-2.23-1.86L3 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-7.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
              <span className="text-lg font-bold text-green-500">{cart.length}</span>
            </Link>

            {/* User info */}
            <div className="relative group">
              <button className="flex items-center gap-2 text-white font-semibold">
                <span>{user?.username}</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown */}
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg hidden group-hover:block">
                <button
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
                >
                  Log out
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="px-4 py-1.5 bg-green-500 text-white rounded-full font-bold hover:bg-green-600"
            >
              Log in
            </Link>
            <Link
              to="/sign-up"
              className="px-4 py-1.5 bg-blue-500 text-white rounded-full font-bold hover:bg-blue-600"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </div>
  );
    
};

export default Header;