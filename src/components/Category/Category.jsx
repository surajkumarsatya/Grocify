import React from "react";
import Heading from "../Heading/Heading";
import FruitCat from "../../assets/fruits-and-veggies.png";
import DairyCat from "../../assets/dairy-and-eggs.png";
import SeaFoodCat from "../../assets/meat-and-seafood.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Category = () => {
  const renderCards = category.map((cards) => {
    return (
      // Card
      <div className="flex-1"  key={cards.id}>
        {/* Card-Image */}
        <div className="w-full min-h-[30vh] relative -mb-6">
          <img className="absolute bottom-0" src={cards.image}></img>
        </div>

        {/* Card-Content */}
        <div className="bg-zinc-100 pt-10 p-5 rounded-xl">
          <h3 className="text-zinc-800 text-3xl font-bold">{cards.title}</h3>
          <p className="text-zinc-600 mt-3 mb-6">{cards.description}</p>
          {/* <Button content="See All" /> */}
          <Link to={cards.path} className="bg-gradient-to-b from-orange-400 to-orange-500 text-white md:px-8 md:py-3 px-5 py-2 rounded-lg md:text-lg text-md hover:scale-105 transition-all duration-300 cursor-pointer">See All</Link>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-10 py-20">
        <Heading highlight="Shop" heading="by Category" />

        {/* Category Cards */}
        <div className="md:flex md:flex-row flex-col gap-10 md:mt-15 -mt-5">
          {renderCards}
        </div>
      </div>
    </section>
  );
};

export default Category;

const category = [
  {
    id: 1,
    title: "Fruits & Veggis",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: FruitCat,
    path: '/fruits'
  },

  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: DairyCat,
    path: '/dairy'
  },

  {
    id: 3,
    title: "Meat & SeaFood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: SeaFoodCat,
    path: '/seafood'
  },
];
