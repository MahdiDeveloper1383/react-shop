import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // مدیریت وضعیت ورود کاربر

    return ( 
        <div className="w-full h-10 sm:h-24 bg-slate-600 flex items-center justify-between">
            {/* منوی سمت چپ */}
            <div className="left flex flex-row justify-center items-center pl-5">
                <ul className="flex flex-row justify-between font-serif text-xs gap-5 sm:text-teal-300 text-cyan-500 md:text-2xl">
                    <li className="hover:text-white">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="hover:text-white">
                        <Link to='/about-us'>About Us</Link>
                    </li>
                    <li className="hover:text-white">
                        <Link to='/contact-us'>Contact Us</Link>
                    </li>
                </ul>
            </div>

            {/* منوی سمت راست */}
            <div className="right mr-5 w-56 h-16 border-[4px] rounded-full border-black flex items-center justify-center">
                {isLoggedIn ? (
                    // نمایش سبد خرید اگر کاربر لاگین کرده باشد
                    <div className="flex items-center">
                        <Link to="/cart" className="flex items-center gap-2">
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
                            <span className="text-xl font-bold text-green-500">Cart</span>
                        </Link>
                    </div>
                ) : (
                    // نمایش لینک‌های "Log in" و "Sign Up" اگر کاربر لاگین نکرده باشد
                    <>
                        <div className="w-28 h-15 border-r-[5px] text-center flex justify-center border-black transition-colors hover:bg-green-300 rounded-full">
                            <h2 className="text-2xl font-bold pt-2 text-green-500">
                                <Link to='/login'>Log in</Link>
                            </h2>
                        </div>
                        <h2 className="text-2xl font-bold pt-2 text-green-600">
                            <Link to='/sign-up'>Sign Up</Link>
                        </h2>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;