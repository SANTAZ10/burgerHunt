"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState(false)

  const currentYear = new Date().getFullYear();


  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleNavBg = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handleNavBg);

    return () => {
      window.removeEventListener("scroll", handleNavBg);
    };
  });

  return (
    <div className={navBg ? " fixed z-40 w-full h-auto flex text-white items-center justify-center bg-gray-800" : " fixed z-40 w-full h-auto flex text-white items-center justify-center bg-transparent"} style={{ backgroundColor: `${navBg}` }}>
      <div className="  flex justify-between items-center w-full h-auto px-4 py-2 md:px-16">
        <Link href="/" className=" flex gap-[10px] items-center justify-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="envira">
              <path
                id="Vector"
                d="M37.5 2.5C37.5 39.8125 12.7109 31.1406 8.88281 31.1797L2.5 37.5V35.4688L8.0625 29.9688C7.73438 26.9219 5.36719 20.25 10.9531 13.2187C16.5391 6.17187 23.2266 6.5625 37.5 2.5ZM33.9062 8.72656C35.7422 4.84375 33.1875 8.32031 33.1875 8.32031C30.75 11.8516 27.4297 13.4766 23.8203 15.3672C19.1172 17.8281 12.9062 21.5391 10.7188 26.6328C8.53125 31.7109 9.74219 29.3047 11.3828 27.1016C13.0391 24.8984 18.1797 21.7734 21.5547 19.9922C26.2422 17.5156 30.8203 15.2266 33.9062 8.72656Z"
                fill="white"
              />
            </g>
          </svg>

          <h1 className="font-medium leading-normal ">
            BURGER HUNT
          </h1>
        </Link>
        <div className="gap-10 hidden md:flex">
          <Link
            href="/"
            className="leading-normal md:text-[16px]  font-semibold font-Crimson"
          >
            HOME
          </Link>
          <Link
            href="/"
            className="leading-normal md:text-[16px]  font-semibold font-Crimson"
          >
            ABOUT US
          </Link>
          <Link
            href="/"
            className="leading-normal md:text-[16px]  font-semibold font-Crimson"
          >
            MENU
          </Link>
          <Link
            href="/"
            className="leading-normal md:text-[16px]  font-semibold font-Crimson"
          >
            CONTACT
          </Link>
        </div>

        <div onClick={handleNav} className="md:hidden cursor-pointer px-4">
          <AiOutlineMenu />
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden w-full h-screen fixed top-0 left-0 bg-gray-700/100"
            : ""
        }
      >
        <div
          className={
            nav
              ? "text-white fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen px-8 py-5 ease-in duration-500 bg-gray-900"
              : " text-white fixed px-8 py-5 ease-in duration-500 transition left-[-100%] top-0 "
          }
        >
          <div>
            <nav className=" relative items-center justify-between py-2 flex">
              <Link
                href="/"
                className=" flex gap-[10px] items-center justify-center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="envira">
                    <path
                      id="Vector"
                      d="M37.5 2.5C37.5 39.8125 12.7109 31.1406 8.88281 31.1797L2.5 37.5V35.4688L8.0625 29.9688C7.73438 26.9219 5.36719 20.25 10.9531 13.2187C16.5391 6.17187 23.2266 6.5625 37.5 2.5ZM33.9062 8.72656C35.7422 4.84375 33.1875 8.32031 33.1875 8.32031C30.75 11.8516 27.4297 13.4766 23.8203 15.3672C19.1172 17.8281 12.9062 21.5391 10.7188 26.6328C8.53125 31.7109 9.74219 29.3047 11.3828 27.1016C13.0391 24.8984 18.1797 21.7734 21.5547 19.9922C26.2422 17.5156 30.8203 15.2266 33.9062 8.72656Z"
                      fill="white"
                    />
                  </g>
                </svg>

                <h1 className="italic font-Inter">BURGER HUNT</h1>
              </Link>
              <div onClick={handleNav}>
                <FaTimes />
              </div>
            </nav>

            <div className="flex flex-col gap-6 mt-12">
              <Link href="/" className="font-semibold font-Crimson">HOME</Link>
              <Link href="/" className="font-semibold font-Crimson">ABOUT US</Link>
              <Link href="/" className="font-semibold font-Crimson">MENU</Link>
              <Link href="/" className="font-semibold font-Crimson">CONTACT</Link>
            </div>

            <div className="absolute bottom-4 flex items-center">
              <h3 className="text-xs">
                © All Rights Reserved. {currentYear}, Burger Hunt Inc.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
