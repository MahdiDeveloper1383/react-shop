import axios from "axios";
import { User } from "../Interfaces/user";
import { useQuery } from "@tanstack/react-query";

const GetUsers = () => {
    return useQuery<User[]>({
        queryKey:['users'],
        queryFn: async()=>{
            const respone = await axios.get('https://687a0739abb83744b7eb0c77.mockapi.io/users');
            return respone.data
        }
    })
}
 
export default GetUsers;