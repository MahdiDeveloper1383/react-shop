import React, { useState } from "react";
import Header from "../../Components/Shop/Header";
import Product_Card from "../../Components/Shop/ProductCard";
import GetProduct from "../../Hooks/GetProducts";
import Slider from "../../Components/Shop/Slider";
import Filters from "../../Components/Shop/Filter";
import Footer from "../../Components/Shop/footer";
const Home = () => {
  const { data:Books =[], isLoading, error } = GetProduct();
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
  const [CurrentPage,serCurrentPage] = useState(1)
  const ItemPerPage = 6
  const indexofLastProduct = ItemPerPage * CurrentPage
  const indexofFirstProduct = indexofLastProduct - ItemPerPage
  const CurrentBooks = filteredBooks.slice(indexofFirstProduct,indexofLastProduct)
  return (
    <React.Fragment>
      <title>Home</title>
      <Header />
      <Slider/>
      <div className="flex justify-between w-full mt-5">
          <Filters onChange={setFilter}/>
          
        <div className="flex flex-row flex-wrap ml-auto mr-auto p-5 gap-5 justify-center  items-center ">
          {isLoading && <h3 className="text-9xl font-bold text-yellow-400">loading...</h3>}
          {error && <h3 className="text-9xl font-bold text-red-800">Fail</h3>}
            {!error&& !isLoading &&CurrentBooks.map((book) => (
              <Product_Card key={book.id} Book={book} />
            ))}
           <div className="flex justify-center gap-2 mt-4">
  {Array.from({ length: Math.ceil(filteredBooks.length / ItemPerPage) }, (_, i) => (
    <button
    key={i}
    onClick={() => serCurrentPage(i + 1)}
    className={`px-3 py-1 rounded ${CurrentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
    >
      {i + 1}
    </button>
  ))}
</div>
        </div>

       
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default Home;
