import { useUser } from "../../Hooks/Useuser";
import { User } from "../../Interfaces/user";

const User_Card = ({ user }: { user: User }) => {
  const {deleteUser} = useUser()
  return (
    <tr>
      <td className="border px-4 py-2">{user.id}</td>
      <td className="border px-4 py-2">{user.username}</td>
      <td className="border px-4 py-2">{user.email}</td>
      <td className="border px-4 py-2">{user.role}</td>
      <td className="border px-1 py-2">
        <div className="flex flex-row gap-6 ml-auto mr-auto items-center justify-center">
          {user.id !== "1" && (
            <>
              <button className="w-24 h-10 rounded-xl bg-blue-500 text-white hover:bg-blue-600">
                Edit
              </button>
              <button
                onClick={()=>deleteUser.mutate(user.id)}
                className="w-24 h-10 rounded-xl bg-red-500 text-white hover:bg-red-600"
              >
                Delete
              </button>
            </>
          )}
          {user.id === "1" && " 🛡 Super admin — untouchable!"}
        </div>
      </td>
    </tr>
  );
};

export default User_Card;
