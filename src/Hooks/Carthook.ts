// src/hooks/useCart.ts
import { useContext } from "react";
import { CartContext } from "../contexts/ProductContext";

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
