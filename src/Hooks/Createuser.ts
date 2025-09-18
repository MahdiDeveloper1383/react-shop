import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { User } from "../Interfaces/user";

export const CreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newUser: Omit<User, "id">) => {
      const response = await axios.post(
        "https://687a0739abb83744b7eb0c77.mockapi.io/users",
        newUser,
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    }
  });
};
