import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { assets } from "../assets/assets";

const RelatedProducts = ({ category, subCategory }) => {
  const { products = [] } = useContext(ShopContext); // ضمان قيمة افتراضية للمنتجات
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = [...products];

      // فلترة بناءً على الفئة إذا كانت موجودة
      if (category) {
        productsCopy = productsCopy.filter(
          (item) => item.category === category
        );
      }

      // فلترة بناءً على النوع الفرعي إذا كان موجودًا
      if (subCategory) {
        productsCopy = productsCopy.filter(
          (item) => item.subCategory === subCategory
        );
      }

      // اختيار أول 5 منتجات
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory]); // إضافة `category` و `subCategory` إلى التبعيات

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item) => (
          <ProductItem
            key={item._id} // استخدام معرف فريد
            id={item._id}
            name={item.name}
            image={item.image || assets.default_image} // صورة افتراضية إذا لم تتوفر الصورة
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
