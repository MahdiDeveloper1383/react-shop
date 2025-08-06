import React from "react"
import { IBook } from "../Interfaces/Books";

interface ProductCardProps {
    Book: IBook; // Define the type for the Book prop
  }
const Porduct_Card: React.FC<ProductCardProps>=({Book}) => {
    return (

            <div className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                <div className="h-48 bg-cover bg-center" ></div>
                <img className="h-48 w-full object-cover object-end" src={Book.cover} alt="Home in Countryside" />
                <div className="p-6">
                    <div className="flex items-baseline">
                        <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">New</span>
                        <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                            3 beds &bull; 2 baths
                        </div>
                    </div>
                    <h4 className="mt-2 font-semibold text-lg leading-tight truncate">{Book.name}</h4>

                    <div className="mt-1">
                        <span>{Book.price}</span>
                        <span className="text-gray-600 text-sm">/ wk</span>
                    </div>
                    <div className="mt-2 flex items-center">
                        <span className="text-teal-600 font-semibold">
                            <span>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </span>
                            <span className="ml-2 text-gray-600 text-sm">34 reviews</span>
                        </span>
                    </div>
                </div>
            </div>


);
}

export default Porduct_Card;