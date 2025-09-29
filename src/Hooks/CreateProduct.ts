import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IBook } from "../Interfaces/Books";
import axios from "axios";

export const CreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newProduct: Omit<IBook, "id">) => {
      const response = await axios.post(
        "https://687a0739abb83744b7eb0c77.mockapi.io/Books",
        newProduct,
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data
    },
    onSuccess: ()=>{
        queryClient.invalidateQueries({queryKey:['Books']})
    }   
  });
};
