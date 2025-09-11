import React, { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import Star from "./Star";
import { UserContext } from "../../contexts/UserContext";
import { useCart } from "../../Hooks/Carthook";
import { IBook } from "../../Interfaces/Books";

interface ProductCardProps {
    Book: IBook; // Define the type for the Book prop
}
const Product_Card: React.FC<ProductCardProps> = ({ Book }: { Book: IBook}) => {
    const { addToCart } = useCart()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    useEffect(() => {
        setIsLoggedIn(!!user)
    }, [user])
    const handleaddtocart = () => {
        if (isLoggedIn) {
            addToCart({ ...Book, quantity: 1 })
        } else {
            setTimeout(() => {
                navigate('login')
            }, 2000);
        }
    }
    return (
        <div className={`w-full hover:shadow-2xl transition-shadow delay-100 max-w-sm ease-in bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 cursor-pointer ${Book.stock === 0 ? "filter blur-sm" : ""}`}>
            {Book.stock > 0 ? (

                <Link to={`/product/${Book.id}`}>
                    <img className="p-8 rounded-t-lg" src={Book.cover} alt="product image" />
                </Link>
            ) : (
                <img className="p-8 rounded-t-lg" src={Book.cover} alt="product image" />
            )
            }

            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{Book.name}</h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} index={i} rating={Book.rating} />
                        ))}
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">{Book.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${Book.price}</span>
                    <a onClick={handleaddtocart} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                </div>
            </div>
        </div>



    );

}

export default Product_Card;