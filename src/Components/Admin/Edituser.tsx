import { useState, FormEvent } from "react";
import { User } from "../../Interfaces/user";
import { useUser } from "../../Hooks/Useuser";



const EditUser = ({ user, onCancel }: {user:User,onCancel:()=>void}) => {
  const { editUser } = useUser();
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    editUser.mutate(
      { userId: user.id, userData: { username, email, role } },
      {
        onSuccess: () => {
          alert("User updated successfully!");
          onCancel()
        },
        onError: () => alert("Failed to update user."),
      }
    );
  };

  return (
    <div className="w-full h-screen flex flex-col border rounded-xl p-5 gap-6 bg-gray-50">
      <div className="w-full h-20 flex justify-between items-center bg-gray-400 rounded-xl p-5">
        <h3 className="text-3xl font-bold text-gray-600">Edit User</h3>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-600 text-white rounded-xl hover:bg-gray-700"
        >
          Cancel
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-full max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg"
      >
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded px-3 py-2"
            required
          />
        </div>

        
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded px-3 py-2"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as 'user' | 'admin')}
            className="border rounded px-3 py-2"
            required
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="flex justify-end gap-4 mt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 rounded-xl hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
        
            className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
          >
            Save
          </button>
        </div>

        {editUser.isError && (
          <p className="text-red-500 mt-2">Failed to update user. Try again.</p>
        )}
      </form>
    </div>
  );
};

export default EditUser;
