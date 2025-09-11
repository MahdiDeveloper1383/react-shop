import { Link } from "react-router-dom";
import { IBook } from "../Interfaces/Books";
import { useState } from "react";

const Basket_card = ({ product }: { product: IBook }) => {
    const [count,setCount] = useState<number>(product.quantity)
    const totalPriceofproduct = product.price * count
    return (
        <tbody>
            <tr>
                <td className="py-4">
                    <div className="flex items-center">
                        <img className="h-16 w-16 mr-4" src={product.cover} alt="Product image" />
                        <span className="font-semibold"><Link to={`/product/${product.id}`}>{product.name}</Link></span>
                    </div>
                </td>
                <td className="py-4">${product.price}</td>
                <td className="py-4">
                    <div className="flex items-center">
                        <button className="border rounded-md py-2 px-4 mr-2">-</button>
                        <span className="text-center w-8">{count}</span>
                        <button onClick={()=>setCount(count+1)} className="border rounded-md py-2 px-4 ml-2">+</button>
                    </div>
                </td>
                <td className="py-4">${totalPriceofproduct}</td>
            </tr>
        </tbody>
    );
}

export default Basket_card;