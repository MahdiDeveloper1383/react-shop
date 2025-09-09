import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { useCart } from "../Hooks/Carthook";
import { IBook } from "../Interfaces/Books";
import Basket_card from "../Components/Basket_card";
const Cart_Shop = () => {
    const {cart} = useCart()
    const [products,setproducts] = useState<IBook[]>([])
    const [taxes,setTaxes] = useState<number>(0)
    const [ship,setship] = useState<number>(0)
     const totalPrice = products.reduce((total,product)=>{
        return total + product.price * product.quantity;
    },0)
    const totaltaxes = totalPrice * taxes
    const totalPricewithTaxesship = totalPrice + totaltaxes + ship
    useEffect(()=>{
        setproducts(cart)
        if (totalPrice<50) {
        setTaxes(0.1)
        setship(0)
    }else if (totalPrice>50&&totalPrice<100) {
        setTaxes(0.2)
        setship(20)
    }else{
        setTaxes(0.25)
        setship(35)
    }
    
    },[products,totalPrice])
   
    
    return ( 
        <React.Fragment>
            <Header/>
            <div className="bg-gray-100 h-screen py-8">
    <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
                <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-left font-semibold">Product</th>
                                <th className="text-left font-semibold">Price</th>
                                <th className="text-left font-semibold">Quantity</th>
                                <th className="text-left font-semibold">Total</th>
                            </tr>
                        </thead>
                        {
                            products.map((product)=>(
                                <Basket_card key={product.id} product={product}/>
                            ))
                        }
                    </table>
                </div>
            </div>
            <div className="md:w-1/4">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Summary</h2>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>${totalPrice}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Taxes</span>
                        <span>${(totaltaxes).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>${ship}</span>
                    </div>
                    <hr className="my-2"/>
                    <div className="flex justify-between mb-2">
                        <span className="font-semibold">Total</span>
                        <span className="font-semibold">${(totalPricewithTaxesship).toFixed(2)}</span>
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                </div>
            </div>
        </div>
    </div>
</div>
        </React.Fragment>
     );
}
 
export default Cart_Shop;