import React, { useState } from "react";
import Header from "../Components/Header";
import Porduct_Card from "../Components/ProductCard";
import GetProduct from "../Hooks/GetProducts";
import Slider from "../Components/Slider";
const Home = () => {
  const { Books, loading, error } = GetProduct();
  const [filter, setFilter] = useState<string>("");
  const [genere, setGenre] = useState<string>("");
  const [Language,setLanguage] = useState<string>('')
  const [GenereisOpen, setGenereIsOpen] = useState(false);
  const [LanguageisOpen,setLanguageisOpen] = useState(false)
  const filteredBooks = Books.filter(
    (book) =>
    book.name.toLowerCase().includes(filter.toLowerCase()) 
    &&(genere === "" || book.type.includes(genere))
    &&(Language===''||book.language.includes(Language))
  );
  return (
    <React.Fragment>
      <Header />
      <Slider/>
      <div className="flex justify-between w-full mt-5">
        <div className="w-52 h-[700px] bg-slate-200 flex-shrink-0 rounded-xl">
          <input
            type="text"
            placeholder="Enter Book name"
            className="w-full p-2 mt-4 "
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <div>
            <ul>
              <li className="cursor-pointer px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md" onClick={() => {
                setGenre(""); 
                setLanguage('');
                }}>
                All
              </li>
             <li
        className="cursor-pointer px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
        onClick={() => setGenereIsOpen(!GenereisOpen)}
      >
        Genre
      </li>
      {GenereisOpen && (
        <ul className="absolute left-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setGenre("Kids");
              setGenereIsOpen(false);
            }}
          >
            Kids
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setGenre("Fiction");
              setGenereIsOpen(false);
            }}
          >
            Fiction
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setGenre("History");
              setGenereIsOpen(false);
            }}
          >
            History
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setGenre("Comics");
              setGenereIsOpen(false);
            }}
          >
            Comics
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setGenre("Philosophy");
              setGenereIsOpen(false);
            }}
          >
            Philosophy
          </li>
        </ul>
      )}
      <li
        className="cursor-pointer px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
        onClick={() => setLanguageisOpen(!LanguageisOpen)}
      >
        Language
      </li>
      {
        LanguageisOpen &&(
          <ul className="absolute left-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setLanguage("English");
              setLanguageisOpen(false);
            }}
          >
            English
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setLanguage("French");
              setLanguageisOpen(false);
            }}
          >
            French
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setLanguage("Russian");
              setLanguageisOpen(false);
            }}
          >
            Russian
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setLanguage("Spanish");
              setLanguageisOpen(false);
            }}
          >
            Spanish
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setLanguage("Japanese");
              setLanguageisOpen(false);
            }}
          >
            Japanese
          </li>
           <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setLanguage("Persian");
              setLanguageisOpen(false);
            }}
          >
            Persian
          </li>
           <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setLanguage("Arabic");
              setLanguageisOpen(false);
            }}
          >
            Arabic
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setLanguage("German");
              setLanguageisOpen(false);
            }}
          >
            German
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setLanguage("Italian");
              setLanguageisOpen(false);
            }}
          >
            Italian
          </li>
        </ul>
        )
      }
            </ul>
          </div>
        </div>
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
