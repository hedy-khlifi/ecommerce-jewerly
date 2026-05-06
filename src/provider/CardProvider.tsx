// provider/CardProvider.tsx
"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type Product = {
  productId: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  quantity: number;
  productImage?: string;
};

type CartContextType = {
  items: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  resetCart: () => void;
  cartCount: number;
  cartTotal: number;
};

const getCookies = (name: string) => {
  if (typeof document === "undefined") return null;
  return document.cookie
    .split(";")
    .find((row) => row.trim().startsWith(name + "="))
    ?.split("=")[1];
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Product[]>(() => {
    if (typeof document === "undefined") return [];
    try {
      const data = getCookies("cart");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    document.cookie = `cart=${JSON.stringify(items)}; max-age=604800; path=/`;
  }, [items]);

  const addToCart = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.productId === product.productId,
      );

      if (existing) {
        // Update quantity by adding the new quantity
        return prev.map((item) =>
          item.productId === product.productId
            ? { ...item, quantity: item.quantity + product.quantity }
            : item,
        );
      }

      return [...prev, product];
    });
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.productId !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.productId === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const resetCart = () => {
    setItems([]);
  };

  // Fix: Calculate total number of items (sum of quantities)
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  // Fix: Calculate total price correctly
  const cartTotal = items.reduce(
    (total, item) => total + item.productPrice * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        items,
        resetCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
