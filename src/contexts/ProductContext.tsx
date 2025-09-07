import { createContext, ReactNode, useState } from "react";
import { IBook } from "../Interfaces/Books";
interface CartContextType {
  cart: IBook[];
  addToCart: (item: IBook) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}
export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => { },
  removeFromCart: () => { },
  clearCart: () => { }
})
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<IBook[]>([]);

  const addToCart = (item: IBook) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
