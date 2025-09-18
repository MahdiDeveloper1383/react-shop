import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IBook } from "../Interfaces/Books";

const GetProduct = () => {
    return useQuery<IBook[]>({
      queryKey:['Books'],
      queryFn: async()=>{
        const respone = await axios.get('https://687a0739abb83744b7eb0c77.mockapi.io/Books')
        return respone.data
      }
    })
}
 
export default GetProduct;