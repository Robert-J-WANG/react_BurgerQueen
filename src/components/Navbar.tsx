import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { setIsOpen, setNav, useCartStore } from "@/stores/cartStore";
import { CartItem } from "./CartItem.tsx";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const nav = useCartStore((state) => state.nav);
  const isOpen = useCartStore((state) => state.isOpen);
  const totalCount = useCartStore((state) => state.totalCount);
  return (
    <div className="fixed top-0 left-0 z-10 w-full bg-orange-500/70">
      <div className="container flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-2 p-4">
          <div className="cursor-pointer" onClick={setNav}>
            <AiOutlineMenu size={40} />
          </div>
          <Link to="/react_BurgerQueen/">
            <h1 className="hidden px-2 text-2xl md:block sm:text-3xl lg:text-4xl">
              Burger<span className="font-bold">Queen</span>
            </h1>
          </Link>
          <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
            <p className="p-2 text-white bg-black rounded-full">Delivery</p>
            <p className="p-2">Pickup</p>
          </div>
        </div>

        {/* Search Input */}
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] md:w-[300px] xl:w-[400px]">
          <AiOutlineSearch size={25} />
          <input
            className="w-full p-2 bg-transparent focus:outline-none"
            type="text"
            placeholder="Search foods"
          />
        </div>
        {/* Cart button */}
        <button
          className="items-center mx-4 text-white bg-black rounded-full md:flex"
          onClick={setIsOpen}
        >
          <BsFillCartFill size={30} />
          <span className="hidden xl:block">
            My Cart ( <span>{totalCount}</span> )
          </span>
        </button>

        {/* Mobile Menu */}
        {/* Overlay */}
        {nav ? (
          <div className="fixed top-0 left-0 z-10 w-full h-screen bg-black/80"></div>
        ) : (
          ""
        )}

        {/* Side drawer menu */}
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500"
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-500"
          }
        >
          <AiOutlineClose
            size={40}
            className="absolute cursor-pointer right-4 top-4"
            onClick={setNav}
          />
          <h2 className="p-4 text-2xl">
            Burger<span className="font-bold">Queen</span>
          </h2>
          <nav>
            <ul className="flex flex-col p-4 text-gray-800">
              <li className="flex py-4 text-xl">
                <TbTruckDelivery size={25} className="mr-4" /> Orders
              </li>
              <li className="flex py-4 text-xl">
                <MdFavorite size={25} className="mr-4" /> Favorites
              </li>
              <li className="flex py-4 text-xl">
                <FaWallet size={25} className="mr-4" /> Wallet
              </li>
              <li className="flex py-4 text-xl">
                <MdHelp size={25} className="mr-4" /> Help
              </li>
              <li className="flex py-4 text-xl">
                <AiFillTag size={25} className="mr-4" /> Promotions
              </li>
              <li className="flex py-4 text-xl">
                <BsFillSaveFill size={25} className="mr-4" /> Best Ones
              </li>
              <li className="flex py-4 text-xl">
                <FaUserFriends size={25} className="mr-4" /> Invite Friends
              </li>
            </ul>
          </nav>
        </div>

        {/* shopping cart drawer menu */}
        {/* Overlay */}
        {isOpen ? (
          <div className="fixed top-0 left-0 z-10 w-full h-screen bg-gray-700/80"></div>
        ) : (
          ""
        )}

        <div
          className={
            isOpen
              ? "fixed top-0 right-0 w-[320px] md:w-[450px] lg:w-[550px] h-screen  bg-white z-10 duration-500 p-4 overflow-y-scroll scroll-smooth"
              : "fixed top-0 right-[-100%] w-[300px] md:w-[400px] lg:w-[500px] h-screen bg-white z-10 duration-500"
          }
        >
          <AiOutlineClose
            size={35}
            className="absolute cursor-pointer right-4"
            onClick={setIsOpen}
          />
          <h1 className="font-black text-orange-500 md:text-2xl lg:text-3xl">
            My Cart
          </h1>
          {totalCount === 0 ? (
            <h1 className="m-4 text-xl text-red-600"> Cart is empty!</h1>
          ) : (
            <CartItem />
          )}
        </div>
      </div>
    </div>
  );
};
