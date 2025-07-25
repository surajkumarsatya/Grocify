import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation'; 

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Heading from "../Heading/Heading";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-10 py-20">
        <Heading highlight="Customers" heading="Saying" />

        <div className="flex justify-end py-5 gap-x-3">
          <button className="custom-prev text-2xl text-zinc-800 h-8 w-8 rounded-lg flex justify-center items-center bg-zinc-100 hover:text-white cursor-pointer hover:bg-orange-500">
            <IoIosArrowBack />
          </button>
          <button className="custom-next text-2xl text-zinc-800 h-8 w-8 rounded-lg flex justify-center items-center bg-zinc-100 hover:text-white cursor-pointer hover:bg-orange-500">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {review.map(item => {
            return (
              <SwiperSlide key={item.id} className="md:min-h-[50vh] bg-zinc-100 rounded-xl p-8">
                <div className="flex gap-5 items-center">
                  <div className="bg-red-400 w-12 h-12 rounded-full outline-2 outline-orange-500 outline-offset-4 overflow-hidden">
                    <img src={item.image} className="w-full h-full"></img>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold">{item.name}</h5>
                    <p className="text-zinc-600">{item.proffession}</p>
                    <span className="flex text-yellow-400 text-xl mt-3 gap-1">
                      {Array.from({ length: item.rating }, (_, index) => (
                        <FaStar key={index}/>
                      ))}
                    </span>
                  </div>
                </div>

                <div className="mt-10 min-h-[15vh]">
                  <p className="text-zinc-600">{item.para}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

const review = [
  {
    id: 1,
    name: "Emily Johnson",
    proffession: "Food Blogger",
    rating: 3,
    para: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
    image: Customer1,
  },

  {
    id: 2,
    name: "David Smith",
    proffession: "Chef",
    rating: 4,
    para: "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
    image: Customer2,
  },

  {
    id: 3,
    name: "Alya Zahra",
    proffession: "Model",
    rating: 3,
    para: "Shopping online with FreshBasket has saved me so much time. I trust them for my familys weekly groceries—always fresh, affordable, and reliable.",
    image: Customer3,
  },

  {
    id: 4,
    name: "Carlos Mendes",
    proffession: "Fitness Coach",
    rating: 5,
    para: "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!",
    image: Customer4,
  },

  {
    id: 5,
    name: "Watcha Phongchai",
    proffession: "Nutritionist",
    rating: 3,
    para: "FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch",
    image: Customer5,
  },
];
