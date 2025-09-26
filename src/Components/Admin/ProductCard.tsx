import { UseProduct } from "../../Hooks/UseProduct";
import { IBook } from "../../Interfaces/Books";

const Product_Card = ({Product}:{Product:IBook}) => {
    const {deleteProduct} = UseProduct()
    return ( 
        <tr>
                <td className="border px-4 py-2">{Product.id}</td>
                <td className="border px-4 py-2">{Product.name}</td>
                <td className="border px-4 py-2">${Product.price}</td>
                <td className="border px-4 py-2">
                  <img
                    src={Product.cover}
                    alt="Product"
                    className="w-24 h-32 object-cover rounded-lg shadow-md"
                  />
                </td>
                <td className="border px-2 py-1">
                  <div className="flex flex-row gap-6 ml-auto mr-auto items-center justify-center">
                    <button className="border w-24 h-10 rounded-xl bg-blue-500 text-white hover:bg-blue-600">
                      Edit
                    </button>
                    <button 
                    onClick={()=>deleteProduct.mutate(Product.id)}
                    className="border w-24 h-10 rounded-xl bg-red-500 text-white hover:bg-red-600">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
     );
}
 
export default Product_Card;