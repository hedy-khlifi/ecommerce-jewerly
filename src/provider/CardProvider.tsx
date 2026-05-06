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
  const value = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="))
    ?.split("=")[1];

  if (!value) return null;
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
};

const setCookie = (name: string, value: string, days: number = 7) => {
  if (typeof document === "undefined") return;

  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

  // Important: Set proper cookie attributes for production
  //const isProduction = process.env.NODE_ENV === "production";
  const cookieValue = encodeURIComponent(value);

  const cookieString = `${name}=${cookieValue}; expires=${date.toUTCString()}; path=/; SameSite=Lax`;

  // Add Secure flag only in production (requires HTTPS)
  // if (isProduction && window.location.protocol === "https:") {
  //   cookieString += "; Secure";
  // }

  document.cookie = cookieString;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from cookie on mount
  useEffect(() => {
    try {
      const data = getCookies("cart");
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch (error) {
      console.error("Failed to load cart from cookie:", error);
    }
    setIsLoaded(true);
  }, []);

  // Save cart to cookie whenever it changes
  useEffect(() => {
    if (!isLoaded) return; // Don't save until initial load is done

    try {
      const cartData = JSON.stringify(items);
      setCookie("cart", cartData, 7);
    } catch (error) {
      console.error("Failed to save cart to cookie:", error);
    }
  }, [items, isLoaded]);

  const addToCart = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.productId === product.productId,
      );

      if (existing) {
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

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = items.reduce(
    (total, item) => total + item.productPrice * item.quantity,
    0,
  );

  // Don't render until initial load is complete to prevent hydration mismatch
  if (!isLoaded) {
    return null; // Or a loading skeleton
  }

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
