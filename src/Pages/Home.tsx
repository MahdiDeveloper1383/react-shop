import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import img from '../assets/img/teamwork.jpeg'
import Porduct_Card from "../Components/ProductCard";
import axios from "axios";
import { IBook } from "../Interfaces/Books";
import GetProduct from "../Hooks/GetProducts";
const Home = () => {
  const {Books,loading,error} = GetProduct()
    return ( 
       <React.Fragment>
        <Header/>
         <div className="flex flex-row flex-wrap ml-auto mr-auto p-5 gap-5 justify-center  items-center ">
          {Books.map((book)=>(
          <Porduct_Card Book={book}/>
          ))}
         </div>

       </React.Fragment>
     );
}
 
export default Home;