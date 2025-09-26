import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

export const UseProduct =()=>{
    const queryClient = useQueryClient()
     // ======== Delete Product ========
    const deleteProduct = useMutation({
        mutationFn:(ProductId:string)=>axios.delete(`https://687a0739abb83744b7eb0c77.mockapi.io/Books/${ProductId}`),
        onSuccess: ()=> queryClient.invalidateQueries({queryKey:['Books']}),
        onError: (err) => console.error("Delete product failed:", err),
    })

    return{
        deleteProduct
    }
}