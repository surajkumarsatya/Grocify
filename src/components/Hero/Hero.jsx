import React from "react";
import Grocery from "../../assets/grocery.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section>
      <div className="md:min-h-screen max-w-[1200px] mx-auto px-10 md:flex md:flex-row flex-col md:items-center md:gap-5 md:pt-25 pt-35">
        {/* Hero Content */}
        <div className="flex-1">
          <span className="bg-orange-100 text-orange-500 md:text-lg text-md px-5 py-2 rounded-full">
            Export Best Quality...
          </span>
          <h1 className="md:text-6xl/20 text-4xl/11 font-bold mt-5">
            Tasty Organic <span className="text-orange-500">Fruits</span> and{" "}
            <span className="text-orange-500">Veggies</span> In Your Cities
          </h1>
          <p className="text-zinc-600 md:text-lg text-md max-w-[500px] mt-5 mb-5">
            Bred for hign content of beneficial substance. Our products are all
            fresh and healthy.
          </p>
          <Button content="Shop Now" />
        </div>

        {/* Hero Image */}
        <div className="flex-1 md:mt-0 mt-10">
          <img src={Grocery} alt="Hero Image"></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
