import { createContext, ReactNode, useState } from "react";
interface User {
  username: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User) => void;
}
export const UserContext =createContext<UserContextType>({
    user :null,
    setUser:()=>{}
})

export const UserProvider = ({children}:{children:ReactNode})=>{
  const [user,setUser] = useState<User|null>(null)
  return(
        <UserContext.Provider value={{user,setUser}}>
          {children}
        </UserContext.Provider>
    )
}