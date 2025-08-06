import { useEffect, useState } from "react";
import { IBook } from "../Interfaces/Books";
import axios from "axios";

const GetProduct = () => {
    const [Books,setBooks] = useState<IBook[]>([])
    const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(()=>{
    const fetchData = async ()=>{
        try{
        const response = await axios.get("https://687a0739abb83744b7eb0c77.mockapi.io/Books")
        setBooks(response.data)
        }catch (err: any) {
            setError(err.message || "An error occurred");
          } finally {
            setLoading(false);
          }
    }
    fetchData()
  },[])
    return {Books,loading,error};
}
 
export default GetProduct;