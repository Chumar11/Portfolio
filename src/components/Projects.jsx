import React from 'react'
import logo1 from"../images/18.PNG"
import logo2 from"..//images/110.PNG"
import logo3 from"..//images/19.PNG"
import logo4 from"..//images/17.PNG"
import logo5 from"..//images/16.PNG"
import logo6 from"..//images/12.PNG"
import logo7 from"..//images/13.PNG"
import logo8 from"..//images/14.PNG"
import logo9 from"../images/15.PNG"
import "../custom/Hero.css";
export default function Projects() {
  let ar=[{
    project:"Spotify||Clone",
    pic:[{p1:logo1},
      
    ]
  },
  {
    project:"Grocery||Store",
    pic:[{p1:logo2},
      
    ]
  },
  {
    project:"Insta||Clone",
    pic:[{p1:logo3},
      
    ]
  },
  {
    project:"Todo||App",
    pic:[{p1:logo4},
      
    ]
  },
  {
    project:"Weather||App",
    pic:[{p1:logo5},
      
    ]
  },
  {
    project:"Tidio||Panel",
    pic:[{p1:logo6},
   
      
    ]
  }];

  let box=ar.map((v)=>{
    return(
      
        <li className='m-[10px] '>
          <div className=' text-center items-center ml-[20px]'>
          <div className='border-2 border-solid border-[#7e61e7] p-[15px] rounded-[15px] show'>
            {v.pic.map((i)=>{

              return(
              <img className='w-[400px]  h-[300px] rounded-[10px] hover:translate-y-[-0.3rem] hover:transition-all ease 0.5s cursor-pointer opacity-[0.7]' src={i.p1} alt="" />
              )
            })}
          </div>
          <div>
            <h1 className='text-[20px] font-[500] ml-[20px] mt-[20px] mb-[20px]'>{v.project}</h1>
          </div>
          
          </div></li>
      
    )
  })

  return (
    <div id='projects' className='mt-[80px] '>
      <h1 className='text-[25px] font-[500] ml-[80px]'>Some Of Projects </h1>
      <div>
        <ul className='flex flex-wrap mt-[20px] justify-center'>
{box}
        </ul>
      </div>
    </div>
  )
}
