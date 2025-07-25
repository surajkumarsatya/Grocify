import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-20">
      <div className="flex flex-wrap max-w-[1200px] gap-y-10 mx-auto px-10">
        <div className="flex-1 basis-[300px]">
          <a href="" className="text-3xl font-semibold">
            Gr<span className="text-orange-500 uppercase">o</span>cify
          </a>

          <p className="text-zinc-600 mt-5 max-w-[350px]">
            Bred for high content of beneficaial substance. Our products are
            fresh and healty
          </p>

          <p className="text-zinc-800 mt-5">2025 &copy; All Right Reserved</p>
        </div>

        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Company</h5>
          </li>
          <li className="mt-5">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              About Us
            </a>
          </li>
          <li className="mt-5">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              FAQ's
            </a>
          </li>
        </ul>

        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Support</h5>
          </li>
          <li className="mt-5">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              Support Center
            </a>
          </li>
          <li className="mt-5">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              Feedback
            </a>
          </li>
          <li className="mt-5">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              Contact Us
            </a>
          </li>
        </ul>

        <div className="text-zinc-600">
            <h5 className="text-zinc-800 text-2xl font-bold">Stay Connected</h5>
            <p className="mt-5 text-zinc-600">Questions and Feedback? <br /> We'd love to hear from you. </p>
            <div className="flex bg-white mt-5 rounded-lg p-1">
                <input type="email" name="email" id="email" autoComplete="off" placeholder="Email Address" className="h-[5vh] pl-2 flex-1 focus:outline-none"></input>
                <button className="bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white cursor-pointer">
                    <IoIosArrowForward />
                </button>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
