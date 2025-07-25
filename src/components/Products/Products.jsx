import { useState } from "react";
import Heading from "../Heading/Heading";
import ProductList from "../Product/ProductList";
import Cards from "../Cards/Cards";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Products = () => {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [activeTab, setActiveTab] = useState("All");

  let filteredItems =
    activeTab === "All"
      ? ProductList
      : ProductList.filter((item) => item.category === activeTab);

  const renderCards = filteredItems.slice(0, 8).map((product) => {
    return (
      <Cards  key={product.id} image={product.image} name={product.name} price={product.price} />
    );
  });

  return (
    <section>
      <div className="mx-w-[1200px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Products" />

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mt-10">
          {categories.map((category) => {
            return (
              <button
                key={category}
                className={`px-5 py-2 text-lg rounded-full hover:cursor-pointer ${
                  activeTab === category
                    ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white"
                    : "bg-zinc-100"
                }`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-4 grid-cols-1 gap-10 mt-20">
          {renderCards}
        </div>

        <div className="mt-15 mx-auto w-fit">
          <Link
            to="/allProducts"
            className="bg-gradient-to-b from-orange-400 to-orange-500 text-white md:px-8 md:py-3 px-5 py-2 rounded-lg md:text-lg text-md hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
