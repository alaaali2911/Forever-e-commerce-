import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./PRODUCTiTEM.JSX";

function LastCollection() {
  const { products } = useContext(ShopContext);
  const [LatestProuducts, setLatestProuducts] = useState([]);

  useEffect(() => {
    setLatestProuducts(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className=" w-3/4 m-auto text-xs sm:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, in.
        </p>
      </div>
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {LatestProuducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default LastCollection;
