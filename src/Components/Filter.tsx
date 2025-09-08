import React from "react";
import useFilters from "../Hooks/Usefilter";

interface FiltersProps {
  onChange: (filter: {
    filter: string;
    genre: string;
    language: string;
    available:boolean;
    Highprice:boolean;
    Lowprice:boolean;
  }) => void;
}

const Filters: React.FC<FiltersProps> = ({ onChange }) => {
  const {
    filter,
    setFilter,
    genre,
    setGenre,
    language,
    setLanguage,
    genreIsOpen,
    setGenreIsOpen,
    languageIsOpen,
    setLanguageIsOpen,
    available,
    setAvailable,
    Highprice,
    setHighprice,
    Lowprice,
    setLowprice
  } = useFilters();

  React.useEffect(() => {
    onChange({ filter, genre, language,available,Highprice,Lowprice});

     if (Highprice && Lowprice) {
    setLowprice(false);
  }
  if (Lowprice && Highprice) {
    setHighprice(false);
  }
  }, [filter, genre, language,available,Highprice,Lowprice]);

  return (
    <div className="w-52 h-[700px] bg-slate-200 flex-shrink-0 rounded-xl relative">
      <input
        type="text"
        placeholder="Enter Book name"
        className="w-full p-2 mt-4"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <ul>
        <li
          className="cursor-pointer px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
          onClick={() => {
            setGenre("");
            setLanguage("");
            setAvailable(false);
            setHighprice(false);
            setLowprice(false)
          }}
        >
          All
        </li>

        <li
          className="cursor-pointer px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
          onClick={() => setGenreIsOpen(!genreIsOpen)}
        >
          Genre
        </li>
        {genreIsOpen && (
          <ul className="absolute left-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            {["Kids", "Fiction", "History", "Comics", "Philosophy"].map((g) => (
              <li
                key={g}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setGenre(g);
                  setGenreIsOpen(false);
                }}
              >
                {g}
              </li>
            ))}
          </ul>
        )}

        <li
          className="cursor-pointer px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
          onClick={() => setLanguageIsOpen(!languageIsOpen)}
        >
          Language
        </li>
        {languageIsOpen && (
          <ul className="absolute left-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            {[
              "English",
              "French",
              "Russian",
              "Spanish",
              "Japanese",
              "Persian",
              "Arabic",
              "German",
              "Italian",
            ].map((lang) => (
              <li
                key={lang}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setLanguage(lang);
                  setLanguageIsOpen(false);
                }}
              >
                {lang}
              </li>
            ))}
            
          </ul>
        )}
        <li className="cursor-pointer px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md">
                <input type="checkbox" checked={available} onChange={(e)=>setAvailable(e.target.checked)} name="" id="" />
                Available
            </li>
            <li className="cursor-pointer px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md">
                <input type="checkbox" checked={Highprice} onChange={(e)=>setHighprice(e.target.checked)} name="" id="" />
                High to Low price
            </li>
            <li className="cursor-pointer px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md">
                <input type="checkbox" checked={Lowprice} onChange={(e)=>setLowprice(e.target.checked)} name="" id="" />
                Low to High price
            </li>
      </ul>
    </div>
  );
};

export default Filters;
