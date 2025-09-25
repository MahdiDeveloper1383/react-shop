import { lazy, Suspense, useState } from "react";
import GetUsers from "../../Hooks/Getusers";
import User_Card from "./UserCard";
import { User } from "../../Interfaces/user";
const EditUser = lazy(()=>import('./Edituser'))
const Users_dashboard = () => {
    const {data:users=[]} = GetUsers()
    const [filteruser,setuserfilter] = useState<string>('')
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const filteredUsers = users.filter((user)=>user.username.toLocaleLowerCase().includes(filteruser.toLocaleLowerCase()))
     const [CurrentPage, serCurrentPage] = useState(1);
      const ItemPerPage = 6;
      const indexofLastUser = ItemPerPage * CurrentPage;
      const indexofFirstUser = indexofLastUser - ItemPerPage;
      const CurrentUsers = filteredUsers.slice(
        indexofFirstUser,
        indexofLastUser
      );

    return ( 
         <div className="w-full h-screen flex flex-col border rounded-xl ">
            {editingUser && <Suspense fallback={<div className="text-center p-10">Loading editor...</div>}><EditUser onCancel={()=>setEditingUser(null)} user={editingUser}/></Suspense>}
            {!editingUser && (
                <>
                <div className="w-full h-20 flex justify-between bg-gray-400 rounded-xl p-5">
            <h3 className="text-3xl font-bold text-gray-600">User list</h3>
            <input
              type="text"
              className="p-3 rounded-xl text-xl"
              placeholder="Search User..."
              onChange={(e)=>setuserfilter(e.target.value)}
              />
          </div>
          <table className="mt-10 border-2 min-w-[1100px] mr-auto ml-auto border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Username</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Role</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
                {CurrentUsers.map((user)=>(
                    <User_Card key={user.id} user={user} onEdit={()=>setEditingUser(user)}/>
                )) 
                }
                {Array.from(
                    { length: Math.ceil(users.length / ItemPerPage) },
                    (_, i) => (
                        <button
                        key={i}
                        onClick={() => serCurrentPage(i + 1)}
                        className={`px-3 py-1 rounded ${
                            CurrentPage === i + 1
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200"
                            }`}
                            >
                  {i + 1}
                </button>
              )
            )}
            </tbody>
          </table>
          </>
        )}
        </div>
     );
}
 
export default Users_dashboard;