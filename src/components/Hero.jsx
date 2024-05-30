import React from "react";
import "../custom/Hero.css";
import logo from "../images/laptop.png";
import html from "../images/HTML.png";
import css from "../images/css.png";
import js from "../images/js.png";
import 'animate.css';
export default function Hero() {
  return (
    <div className="flex justify-between p-[10px]">
      <div className="my-[13%] w-[50%] ml-[80px] items-left text-left animate__animated  animate__flipInX e1">
        <h2 className="text-[40px] text-orange-400 font-[500] leading-[1px]">
          MUHAMMAD UMAR
        </h2>
        <h1 className="text-[76px] font-[500] animate__animated animate__infinite animate__pulse animate-pulse-slow">Front End Developer</h1>
        <p className="w-[80%] text-[30px] text-gray-400">
          Passionate Frontend Developer | Tarnsforming Ideas Into Seamless And
          Visually Stunning Web Solution
        </p>
      </div>
      <div className="mr-[150px] my-14 e2">
        <img className="w-[370px] h-[450px] rounded-[25px] hover:translate-y-[-0.5rem] cursor-pointer transition all duration-[0.5] ease" src={logo} alt="" />
        <div className="flex justify-between w-[80%] mt-[15px] ml-[10px]">
          <div className=" flex justify-center items-center border-[2px] border-solid border-[#4c399b] rounded-[8px] show">
            <img className="w-[70px] h-[70px] hover:translate-y-[-0.3rem]  transition all duration-[0.5] ease cursor-pointer" src={html} alt="" />
          </div>

          <div className=" flex justify-center items-center border-[2px] border-solid border-[#4c399b] rounded-[8px] show ">
            <img className="w-[70px] h-[70px] hover:translate-y-[-0.3rem] cursor-pointer transition all duration-[0.5] ease" src={css} alt="" />
          </div>
          <div className=" flex justify-center items-center border-[2px] border-solid border-[#4c399b] rounded-[8px] show ">
            <img className="w-[70px] h-[70px] hover:translate-y-[-0.3rem] cursor-pointer transition all duration-[0.5] ease" src={js} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
