import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import Footer from "../components/Footer";

const Collection = () => {
  const {
    products = [],
    search = "",
    showSearch = false,
  } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortOption, setSortOption] = useState("relavent");

  // تحديث الفلتر بناءً على تغيير الفئات أو الأنواع أو الترتيب
  const toggleFilter = (filterArray, setFilterArray, value) => {
    if (filterArray.includes(value)) {
      setFilterArray((prev) => prev.filter((item) => item !== value));
    } else {
      setFilterArray((prev) => [...prev, value]);
    }
  };

  const toggleCategory = (e) =>
    toggleFilter(category, setCategory, e.target.value);

  const toggleSubCategory = (e) =>
    toggleFilter(subCategory, setSubCategory, e.target.value);

  const applyFilter = () => {
    let productsCopy = [...products];

    // تطبيق الفلترة بناءً على البحث
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // تطبيق فلترة الفئات
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    // تطبيق فلترة الأنواع الفرعية
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    // تطبيق الترتيب
    if (sortOption === "low-high") {
      productsCopy.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-low") {
      productsCopy.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(productsCopy);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // تحديث قائمة المنتجات المفلترة عند تحميل الصفحة أو عند تغيير البيانات
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  // إعادة تطبيق الفلترة عند تغيير أي من الفئات، الأنواع، الترتيب أو البحث
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, sortOption, search, showSearch]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        {/* قسم الفلاتر */}
        <div className="min-w-60">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
          >
            FILTERS
            <img
              src={assets.dropdown_icon}
              className={`sm:hidden ${showFilter ? "rotate-90" : ""} h-6`}
              alt="dropdown"
            />
          </p>

          {/* فلتر الفئات */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              {["Men", "Women", "Kids"].map((cat) => (
                <label key={cat} className="flex gap-2">
                  <input
                    className="w-3"
                    type="checkbox"
                    onChange={toggleCategory}
                    value={cat}
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          {/* فلتر الأنواع الفرعية */}
          <div
            className={`border border-gray-300 pl-5 py-3 my-5 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              {["Topwear", "Bottomwear", "Winterwear"].map((subCat) => (
                <label key={subCat} className="flex gap-2">
                  <input
                    className="w-3"
                    type="checkbox"
                    onChange={toggleSubCategory}
                    value={subCat}
                  />
                  {subCat}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* قسم المنتجات */}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />
            <select
              onChange={handleSortChange}
              className="border-2 border-gray-300 text-sm px-2"
              value={sortOption}
            >
              <option value="relavent">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filteredProducts.map((item, index) => (
              <ProductItem
                key={index} // التأكد من استخدام معرف فريد
                id={item._id}
                name={item.name}
                image={item.image || assets.default_image} // صورة افتراضية إذا لم تتوفر الصورة
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collection;
