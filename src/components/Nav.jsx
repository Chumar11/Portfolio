import React from "react";
import logo2 from "../images/Capture1 (2).png";
import html from "../images/HTML.png";
import "../custom/Nav.css";
import "animate.css";
import { useEffect, useState } from "react";
export default function Nav() {
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 120) {
        setBgColor("rgba(0,0,0,0.9)");
      } else {
        setBgColor("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(bgColor);
  return (
    <nav
      className=" p-4 sticky top-0 left-0 z-30"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex items-center justify-around sticky top-0 left-0">
        <div>
          <img className="w-[50px] h-[50px]" src={logo2} alt="Logo" />
        </div>
        <ul className="flex items-center space-x-8 text-white  relative font-[500]">
          <li className="relative custom-hover">
            <a href="/" className="hover:text-gray-400 font-[500] ">
              Home
            </a>
          </li>
          <li className="relative custom-hover">
            <a href="/#skill" className="hover:text-gray-400 ">
              Skills
            </a>
          </li>
          <li className="relative custom-hover">
            <a href="/#projects" className="hover:text-gray-400 letter">
              Projects
            </a>
          </li>
          <li className="relative custom-hover">
            <a href="/#Contact" className="hover:text-gray-400 letter">
              Contact Us
            </a>
          </li>

          <button className="cutom hover:bg- border-none px-[10px] py-[5px] rounded-[3px] ">
            Hire Me
          </button>
        </ul>
      </div>
    </nav>
  );
}
