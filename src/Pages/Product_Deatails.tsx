import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBook } from "../Interfaces/Books";
import GetProduct from "../Hooks/GetProducts";
const Product_deatails = () => {
    const {id} = useParams()
    const [book,setbook] = useState<IBook>()
    const {Books} = GetProduct()
    useEffect(() => {
        if (Books.length > 0 && id) {
          const foundBook = Books.find((book) => book.id.toString() === id);
          setbook(foundBook);
        }
      }, [Books, id]);
    return ( 
       <img src={book?.cover} alt="" />

     );
}
 
export default Product_deatails;