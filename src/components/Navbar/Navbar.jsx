import React, { useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Navbar = () => {

    const[showMenu, setShowMenu] = useState(false)
    // const[isScrolled, setIsScrolled] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }



  return (
    <header className="bg-white top-0 left-0 right-0 fixed z-999">
      <nav className="max-w-[1200px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-semibold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </Link>

        {/* Desktop Menu */}
        <ul className="md:flex items-center gap-x-15 hidden">
          <li>
            <a href="" className="font-semibold tracking-wider text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Nav Action */}
        <div className="flex items-center gap-x-5">
          {/* Input Field */}
          <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search"
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            ></input>
            <button className="bg-orange-500 text-white h-8 w-8 flex justify-center items-center rounded-full">
              <IoSearch />
            </button>
          </div>

          <a href="" className="text-zinc-800 text-2xl">
            <GoHeartFill />
          </a>

          <a href="" className="text-zinc-800 text-2xl">
            <HiShoppingBag />
          </a>

          {/* Hamburger */}
          <a href="#" className="text-zinc-800 text-3xl md:hidden z-999" onClick={toggleMenu}>
            {showMenu ? <IoClose /> : <TbMenu2 />}
          </a>
        </div>

        {/* Mobile Menu */}
         <ul className={`flex flex-col items-start px-5 py-20 gap-5 
         bg-amber-200/100 backdrop-blur-xl w-[50vw] h-[100vh] 
         text-2xl absolute top-0 right-0 transform ease-in-out 
         duration-300 md:hidden ${showMenu ? 'translate-x-0' : 'translate-x-100'}`}>
          <li>
            <a href="" className="font-semibold tracking-wider text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
        </ul>

      </nav>
    </header>
  );
};

export default Navbar;
