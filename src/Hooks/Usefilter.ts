import { useState } from "react";

const useFilters = () => {
  const [filter, setFilter] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [genreIsOpen, setGenreIsOpen] = useState(false);
  const [languageIsOpen, setLanguageIsOpen] = useState(false);
  const [available, setAvailable] = useState(false);
  const [Highprice,setHighprice] = useState(false)
  const [Lowprice,setLowprice] = useState(false)
  return {
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
  };
};

export default useFilters;
