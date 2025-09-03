import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Header";
import Porduct_Card from "../Components/ProductCard";
import GetProduct from "../Hooks/GetProducts";
import { useCart } from "../Hooks/AddCart";
const Home = () => {
  const {Books,loading,error} = GetProduct()
  const[filter,setFilter] = useState<string>('')
  const {cart} = useCart()
  const [genere,setGenre] = useState<string>('')
  const filteredBooks = Books.filter((book)=>book.name.toLowerCase().includes(filter.toLowerCase())&&(genere === ''||book.type.includes(genere)))
    return ( 
       <React.Fragment>
        <Header/>
        <div className="flex justify-between w-full mt-5">
          <div className="w-52 h-[700px] bg-slate-200 flex-shrink-0 rounded-xl">
            <input type="text" 
            placeholder="Enter Book name" 
            className="w-full p-2 mt-4 "
            value={filter}
            onChange={(e)=>setFilter(e.target.value)}
            />
            <div>
              <ul> 
              <li className="cursor-pointer" onClick={()=>setGenre('')}>All</li>
              <li className="cursor-pointer" onClick={()=>setGenre('Kids')}>Kids</li>
              <li className="cursor-pointer" onClick={()=>setGenre('Fiction')}>Fiction</li>
              <li className="cursor-pointer" onClick={()=>setGenre('History')}>History</li>
              <li className="cursor-pointer" onClick={()=>setGenre('Comics')}>Comics</li>
              <li className="cursor-pointer" onClick={()=>setGenre('Philosophy')}>Philosophy</li>
              </ul>
            </div>
          </div>
         <div className="flex flex-row flex-wrap ml-auto mr-auto p-5 gap-5 justify-center  items-center ">
          {filteredBooks.map((book)=>(
            <Porduct_Card Book={book}/>
          ))}
         </div>
          </div>

       </React.Fragment>
     );
}
 
export default Home;