import React, { useState,useEffect } from "react";
import logo1 from "../images/1.png";
import logo2 from "../images/2.png";
import logo3 from "../images/3.png";
import logo4 from "../images/4.png";
import "animate.css";
import Data from "../Data/Data";
export default function Skill() {
  let[ch,setch]=useState(0);
 
  let [a, seta] = useState([
    
     
        {
          tittle:"Frontend",
          skill:[{
         h:"HTML",
         d:"90%",   
          width1:"90%",
         },
         {
          h:"CSS",
          d:"90%",   
           width1:"80%",
          },
          {
              h:"JAVASCRIPT",
              d:"80%",   
               width1:"90%",
              },
              {
                  h:"REACT",
                  d:"70%",   
                   width1:"90%",
                  },
        
         
         ]
      
      
    },
  ]);
  let array = [
    {
      tittle: "Frontend",
      pic: logo1,
    },
    {
      tittle: "Backend",
      pic: logo2,
    },
    {
      tittle: "Tools",
      pic: logo3,
    },
    {
      tittle: "Soft Skills",
      pic: logo4,
    },
  ];

 
  let getdata = (event) => {
    let data1 = document.querySelectorAll(".e11");
    let index = Array.from(data1).indexOf(event.currentTarget);
    let filt = Data.filter((v, i) => i == index);
    seta(filt);
    setch(index);
  };

  let box = a.map((v) => {
    return (
      <div className="border-2 border-solid border-[#7e61e7] w-[550px] h-[320px] rounded-[10px] ">
        <h1 className="text-[#7e61e7] font-[500] items-center ml-[20px] mt-[10px]">
          {v.tittle}
        </h1>
        <div className="border-2 border-solid border-[#7e61e7] my-[10px]"></div>
        <div>
          {v.skill.map((i) => {
            return (
              <ul>
                <li className="px-[20px]">
                  <div className="flex justify-between">
                    <h1>{i.h}</h1>
                    <h1>{i.d}</h1>
                  </div>
                  <div className="border-2 border-solid border-[#7e61e7] my-[10px] h-2 rounded-[10px] ">
                    <div
                      className="border-2 border-solid border-[#7e61e7] h-[0.30rem]  bg-[#7e61e7] rounded-[10px] " style={{ width:i.width1 }}
                    ></div>
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    );
  });

  let Button = array.map((v,index) => {
    return (
      <div
     
        onClick={getdata}
        className={`flex e11 animate__animated animate__fadeInLeft animate-pulse-slow cursor-pointer justify-center item-center relative border-2 border-solid border-[#7e61e7] px-[60px] py-[30px] w-[40%]  mx-[25px] my-[20px] rounded-[10px] ${ch==index?'bg-[#7e61e7]':''}`}
   >
        <h4 className="font-[500] hover:translate-y-[-0.3rem] transition all duration-[0.5] ease">
          {v.tittle}
        </h4>
        <div className="border-2 border-solid border-[#7e61e7]  absolute top-[-23px] left-[-31px] bg-[#060417] rounded-[10px]  ">
          <img className="w-[60px] " src={v.pic} alt="" />
        </div>
      </div>
    );
  });

  return (
    <div id="skill">
      <h1 className="text-[25px] font-[500] ml-[80px]">
        Technical Proficiency
      </h1>
      <div className="flex ml-[100px]">
        <div className=" flex flex-wrap basis-1/2 items-center p-[40px] ml-[25px]">
          {Button}
        </div>

        <div className="mt-[20px]">{box}</div>
      </div>
    </div>
  );
}
