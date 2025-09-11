import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IBook } from "../../Interfaces/Books";
import GetProduct from "../../Hooks/GetProducts";
import Header from "../../Components/Shop/Header";
import Star from "../../Components/Shop/Star";
import { useCart } from "../../Hooks/Carthook";
import { UserContext } from "../../contexts/UserContext";
const Product_deatails = () => {
  const { id } = useParams()
  const [Book, setbook] = useState<IBook>()
  const { Books } = GetProduct()
  const {addToCart} = useCart()
  const [Quantity,setquantity] = useState<number>(1)
  const {user} = useContext(UserContext)
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    if (Books.length > 0 && id) {
      const foundBook = Books.find((book) => book.id.toString() === id);
      setbook(foundBook);
    }
    setIsLoggedIn(!!user)
  }, [Books, id,user]);
  const handleaddtocart = () => {
        if (isLoggedIn) {
            if (Book && Book.id) {
                addToCart({ ...Book, quantity: Quantity });
            } else {
                console.error("Book or Book.id is undefined");
            }
        } else {
            setTimeout(() => {
                navigate('/login')
            }, 2000);
        }
    }
  return (
    <React.Fragment>
      <title>Product Details</title>
      <Header />
      <div className="bg-gray-100">
  <div className="container mx-auto px-4 py-8">
    <div className="flex flex-wrap -mx-4">
  
      <div className="w-full md:w-1/2 px-4 mb-8">

       <img src={Book?.cover} alt="Product"
                    className="w-full h-auto rounded-lg shadow-md mb-4" id="mainImage"/>
      </div>

      <div className="w-full md:w-1/2 px-4">
        <h2 className="text-3xl font-bold mb-2">{Book?.name}</h2>
        <p className="text-gray-600 mb-4">{Book?.athour}</p>
        <div className="mb-4">
          <span className="text-2xl font-bold mr-2">${Book?.price}</span>
        </div>
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} index={i} rating={Book?.rating ?? 0} />
                        ))}
          <span className="ml-2 text-gray-600">{Book?.rating}</span>
        </div>
        <p className="text-gray-700 mb-6">{Book?.description}</p>
        <div className="mb-6">
          <label  className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
          <input type="number" id="quantity" name="quantity" min="1" value={Quantity} onChange={(e)=>setquantity(Number(e.target.value))}
                        className="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
        </div>

        <div className="flex space-x-4 mb-6">
          <button
          onClick={handleaddtocart}
                        className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        Add to Cart
                    </button>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Genere: {Book?.genere.join(", ")}</li>
            <li>Publisher: {Book?.publisher}</li>
            <li>Publish Year: {Book?.publication_year}</li>
            <li>Pages: {Book?.page_count}</li>
            <li>Weight: {Book?.weight}kg</li>
            <li>language: {Book?.language.join(", ")}</li>
            <li>Volumes: {Book?.volumes}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
          </React.Fragment>
          );
}

          export default Product_deatails;