import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "../Interfaces/user";

const GetUsers = () => {
    const [users,setusers] = useState<User[]>([])
    useEffect(()=>{
        const fetchData = async()=>{
                const response = await axios.get("https://687a0739abb83744b7eb0c77.mockapi.io/users")
                setusers(response.data)
        }
        fetchData()
    },[])
    return {users};
}
 
export default GetUsers;