import React, { useState } from "react";
import Header from "../Components/Header";
import Porduct_Card from "../Components/ProductCard";
import GetProduct from "../Hooks/GetProducts";
import Slider from "../Components/Slider";
import Filters from "../Components/Filter";
const Home = () => {
  const { Books, loading, error } = GetProduct();
  const [filter, setFilter] = useState({
    filter: "",
    genre: "",
    language: "",
    available:false,
    Highprice:false,
    Lowprice:false
  });
   const filteredBooks = Books.filter(
    (book) =>
      book.name.toLowerCase().includes(filter.filter.toLowerCase()) &&
      (filter.genre === "" || book.type.includes(filter.genre)) &&
      (filter.language === "" || book.language.includes(filter.language))&&
      (!filter.available||book.stock>0)&&
      (!filter.Highprice||Books.sort((a,b)=>b.price-a.price))&&
      (!filter.Lowprice||Books.sort((a,b)=>a.price-b.price))
  )
  return (
    <React.Fragment>
      <Header />
      <Slider/>
      <div className="flex justify-between w-full mt-5">
          <Filters onChange={setFilter}/>
        <div className="flex flex-row flex-wrap ml-auto mr-auto p-5 gap-5 justify-center  items-center ">
          {filteredBooks.map((book) => (
            <Porduct_Card key={book.id} Book={book} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
