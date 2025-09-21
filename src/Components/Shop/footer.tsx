import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()
    return ( 
        <footer className="flex flex-col space-y-10 justify-center w-[648px] bg-gray-100 px-10 py-10 sm:w-full">

    <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <a className="hover:text-gray-900 cursor-pointer" onClick={()=>navigate('/')}>Home</a>
        <a className="hover:text-gray-900 cursor-pointer" onClick={()=>navigate('/about-us')}>About</a>
        <a className="hover:text-gray-900 cursor-pointer" onClick={()=>navigate('/contact-us')}>Contact</a>
    </nav>

    <div className="flex justify-center space-x-5">
        <a href="https://github.com/MahdiDeveloper1383" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/color/github" width={40} />
        </a>
        <a href="https://www.linkedin.com/in/mahdi-mohamad-nejad-3013a5351" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
    </div>
    <p className="text-center text-gray-700 font-medium">&copy; 2022 Company Ltd. All rights reservered.</p>
</footer>
     );
}
 
export default Footer;