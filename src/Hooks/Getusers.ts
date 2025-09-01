import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "../Interfaces/user";

const GetUsers = () => {
    const [users,setusers] = useState<User[]>([])
    useEffect(()=>{
        const fetchData = async()=>{
                const response = await axios.get("/users/Users.json")
                setusers(response.data)
        }
        fetchData()
    },[])
    return {users};
}
 
export default GetUsers;