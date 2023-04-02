import { React, useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [navBar, setNavBar] = useState(false);
  const [navColor, setNavColor] = useState("transparent");
  const [navTextColor, setNavTextColor] = useState("white");
  const handleNavBar = () => {
    setNavBar(!navBar);
  };

  useEffect(() => {
    const changeNavColor = () => {
      if (window.scrollY >= 80) {
        setNavColor("#ffffff");
        setNavTextColor("#000000");
      } else {
        setNavColor("transparent");
        setNavTextColor("white");
      }
    };
    window.addEventListener("scroll", changeNavColor);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
      style={{ backgroundColor: `${navColor}` }}
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          {" "}
          <h1
            className="font-bold text-4xl"
            style={{ color: `${navTextColor}` }}
          >
            Imagery
          </h1>
        </Link>

        <ul className="hidden sm:flex" style={{ color: `${navTextColor}` }}>
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-4">
            <Link href="/portfolio">Work</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        {/* Mobile Button  */}
        <div onClick={handleNavBar} className="block sm:hidden z-10">
          {navBar ? (
            <AiOutlineClose
              size={20}
              style={{ color: `${navTextColor}` }}
            ></AiOutlineClose>
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${navTextColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={`absolute top-0 ${navBar ? "left-0" : "left-[-100%]"}
          }bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300`}
        >
          <ul>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/portfolio">Work</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
