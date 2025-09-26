import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { IBook } from "../Interfaces/Books"

export const UseProduct =()=>{
    const queryClient = useQueryClient()

     // ======== Delete Product ========
    const deleteProduct = useMutation({
        mutationFn:(ProductId:string)=>axios.delete(`https://687a0739abb83744b7eb0c77.mockapi.io/Books/${ProductId}`),
        onSuccess: () => queryClient.invalidateQueries({queryKey:['Books']}),
        onError: (err) => console.error("Delete product failed:", err)
    })

    // ======== Edit Product ========
    const editProduct = useMutation({
        mutationFn:({ ProductId, ProductData }: { ProductId: string; ProductData: Partial<IBook> })=>axios.put(`https://687a0739abb83744b7eb0c77.mockapi.io/Books/${ProductId}`,ProductData),
        onSuccess: () => queryClient.invalidateQueries({queryKey:['Books']}),
        onError: (err) => console.error("Edit product failed:", err)
    })
    return{
        deleteProduct,
        editProduct
    }
}