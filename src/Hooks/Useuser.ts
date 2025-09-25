import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { User } from "../Interfaces/user";

export const useUser = () => {
  const queryClient = useQueryClient();

 
  // ======== Delete User ========
  const deleteUser = useMutation({
    mutationFn: (userId: string) => axios.delete(`https://687a0739abb83744b7eb0c77.mockapi.io/users/${userId}`),
    onSuccess: () => queryClient.invalidateQueries({queryKey:["users"]}),
    onError: (err) => console.error("Delete user failed:", err),
  });

  // ======== Edit User ========
  const editUser = useMutation({
    mutationFn: ({ userId, userData }: { userId: string; userData: Partial<User> }) =>
      axios.put(`/api/users/${userId}`, userData),
    onSuccess: () => queryClient.invalidateQueries({queryKey:["users"]}),
    onError: (err) => console.error("Edit user failed:", err),
  });

  return {
    deleteUser,
    editUser,
  };
};
