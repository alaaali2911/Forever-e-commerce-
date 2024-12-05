import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import Title from "../components/Title";

const Cart = () => {
  const {
    cartItems,
    products,
    currency,
    updateCartItem,
    removeFromCart,
    navigate,
  } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const detailedCart = cartItems
      .map((item) => {
        const product = products.find((p) => p._id === item._id);
        return product ? { ...product, ...item } : null;
      })
      .filter(Boolean);

    setCartData(detailedCart);
  }, [cartItems, products]);

  const handleQuantityChange = (productId, size, newQuantity) => {
    if (newQuantity < 1) return;
    updateCartItem(productId, size, newQuantity);
  };

  const handleRemoveItem = (productId, size) => {
    removeFromCart(productId, size);
  };

  const calculateTotal = () => {
    return cartData.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  if (cartData.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-medium">Your Cart is Empty</h1>
        <p className="text-gray-500 mt-4">
          <Link to="/" className="text-blue-500 underline">
            Browse Products
          </Link>{" "}
          to add items to your cart.
        </p>
      </div>
    );
  }

  return (
    <div className="cart-page p-5">
      <h1 className="text-2xl font-medium mb-5">Shopping Cart</h1>
      <Title text1={"YOUR"} text2={"CART"} />

      <div className="cart-items mb-10">
        {cartData.map((item) => (
          <div
            key={`${item._id}-${item.size || "no-size"}`}
            className="flex items-center justify-between border-b py-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image?.[0]}
                alt={item.name}
                className="w-20 h-20 object-cover"
              />
              <div>
                <h2 className="font-medium">{item.name}</h2>
                <div className="flex items-center gap-5 mt-2">
                  <p className="text-sm text-gray-500">
                    {currency}
                    {item.price}
                  </p>
                  <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                    {item.size || "Not Specified"}
                  </p>
                  <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => handleRemoveItem(item._id, item.size)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  handleQuantityChange(item._id, item.size, item.quantity - 1)
                }
                className="bg-gray-200 px-3 py-1 hover:bg-gray-300"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() =>
                  handleQuantityChange(item._id, item.size, item.quantity + 1)
                }
                className="bg-gray-200 px-3 py-1 hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary p-5 border-t">
        <h2 className="text-xl font-medium mb-4">Order Summary</h2>
        <p className="flex justify-between">
          <span>Subtotal</span>
          <span>
            {currency}
            {calculateTotal().toFixed(2)}
          </span>
        </p>
        <p className="flex justify-between mt-2 text-sm text-gray-500">
          <span>Tax</span>
          <span>Included</span>
        </p>
        <button
          onClick={() => navigate("/place-order")}
          className="mt-5 w-full bg-black text-white py-3 hover:bg-gray-800 transition"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
