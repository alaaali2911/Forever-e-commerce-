import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Prouduct = () => {
  const { productId } = useParams(); // الحصول على ID المنتج من الـ URL
  const { products, currency, addToCart } = useContext(ShopContext); // الحصول على قائمة المنتجات والعملة من الـ Context
  const [productData, setProductData] = useState(null); // حالة لتخزين بيانات المنتج
  const [image, setImage] = useState("");
  const [size, setSize] = useState(""); // تحديد الحجم
  const [sizeSelected, setSizeSelected] = useState(false); // التحقق من اختيار الحجم

  // الصورة الحالية المعروضة

  // البحث عن المنتج عند تحميل الصفحة أو تغيير ID المنتج
  useEffect(() => {
    console.log(productId);

    if (productId) {
      const item = products.find((item) => item._id === productId);
      if (item) {
        setProductData(item);
        setImage(item.image?.[0] || "");
        console.log("Found item:", item); // تحديد الصورة الافتراضية
      }
    }
  }, [productId, products]);

  // التحقق من حالة المنتج وعرض رسالة إذا لم يتم العثور عليه
  if (!productData) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">Product not found.</p>
      </div>
    );
  }

  // التعامل مع اختيار الحجم
  const handleSizeSelect = (selectedSize) => {
    setSize(selectedSize);
    setSizeSelected(true); // تم اختيار الحجم
  };

  const handleAddToCart = () => {
    if (!sizeSelected) {
      alert("Please select a size before adding to cart");
      return;
    }

    addToCart(productData, size); // إضافة المنتج مع الحجم إلى السلة
  };

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* الصور */}
        <div className="flex-1 flex flex-col sm:flex-row gap-3">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll sm:w-[18.7%] w-full">
            {productData.image?.map((item, index) => (
              <img
                key={index}
                onClick={() => setImage(item)}
                src={item}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                alt={productData.name}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img
              className="w-full h-auto"
              src={image || productData.images?.[0]}
              alt={productData.name}
            />
          </div>
        </div>

        {/* تفاصيل المنتج */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={
                  i < productData.rating
                    ? assets.star_icon
                    : assets.star_dull_icon
                }
                alt="Rating"
                className="w-3.5"
              />
            ))}
            <p className="pl-2">({productData.reviews || 0})</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>

          {/* اختيار الحجم */}
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {["S", "M", "L", "XL", "XXL"].map((sizeOption) => (
                <button
                  key={sizeOption}
                  onClick={() => handleSizeSelect(sizeOption)} // تحديد الحجم عند النقر
                  className={`border py-2 px-4 ${
                    size === sizeOption
                      ? "bg-gray-300" // تغيير اللون عند تحديد الحجم
                      : "bg-gray-100"
                  } hover:bg-gray-200 transition`}
                >
                  {sizeOption}
                </button>
              ))}
            </div>
          </div>

          {/* إضافة إلى السلة */}
          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 hover:bg-gray-800 transition"
          >
            ADD TO CART
          </button>

          {/* سياسة المنتج */}
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* وصف المنتج */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">
            Reviews ({productData.reviews || 0})
          </p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            {productData.longDescription ||
              "No additional description available."}
          </p>
        </div>
      </div>

      {/* المنتجات ذات الصلة */}

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
};

export default Prouduct;
