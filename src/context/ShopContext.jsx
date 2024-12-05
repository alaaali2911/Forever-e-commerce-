import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets"; // تأكد أن المنتجات موجودة بشكل صحيح
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product, size) => {
    setCartItems((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item._id === product._id && item.size === size
      );

      if (existingProduct) {
        // زيادة الكمية للمنتج الموجود بالفعل
        return prevCart.map((item) =>
          item._id === product._id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // إضافة المنتج الجديد إلى السلة
        return [...prevCart, { ...product, size, quantity: 1 }];
      }
    });
  };

  const updateCartItem = (productId, size, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === productId && item.size === size
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  useEffect(() => {
    console.log("Updated cartItems:", cartItems);
  }, [cartItems]);

  // إزالة منتج من السلة
  const removeFromCart = (productId, size) => {
    setCartItems((prevCart) =>
      prevCart.filter((item) => !(item._id === productId && item.size === size))
    );
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // تتبع محتويات السلة عند تغيير cartItems
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    updateCartItem,
    removeFromCart,
    getCartCount,
    navigate,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
