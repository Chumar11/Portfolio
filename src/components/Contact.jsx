import React from 'react'
import logo from '../images/mail.png'
import logo2 from '../images/git.png'



export default function Contact() {
    let arr=[
        {
         pic:logo,
         mail:"chumarsarwar3@gmail.com",
        },
        {
            pic:logo2,
            mail:".kkkk"
        }

    ]

    let box=arr.map((v)=>{
        return(
            <li className='border-2 border-solid border-[#7e61e7] rounded-[10px] py-[25px] my-[15px]'>
                <div className='items-center flex flex-col'>
                    <div className='border-2 border-solid border-[#7e61e7] rounded-[10px] p-[10px]'>

                    <img  className='w-[50px] h-[45px] hover:translate-y-[-5px] hover:transition-all 2s ease-in-out cursor-pointer' src={v.pic} alt="" />
                    </div>
                    <h2 className='mt-[10px] text-gray-500'>{v.mail}</h2>
                </div>
            </li>
        )
    })
  return (
    <div id='Contact' className=' my-[50px]'>
        <h1 className='text-[25px] font-[500] ml-[80px]'>Contact ME</h1>
        <div className='flex  justify-center'>


 <div className='basis-[50%] pr-[40px] animate__bounceIn animate__animated  animate-pulse-slow'>
    <ul>

    {box}
    </ul>
 </div>
 <div className='basis-[40%]'>
<form action="" className='flex flex-col bg-transparent'>
    <div className='mb-[10px] mt-[5px] flex justify-between'>
        <input  className='bg-transparent border-2 border-solid border-[#7e61e7] my-[10px] w-[300px] p-[5px]  rounded-[5px] show'
        type="text" placeholder='First Name ' />
        <input className='bg-transparent border-2 border-solid border-[#7e61e7] my-[10px] w-[300px]  p-[5px] rounded-[5px] show ' type="text"  placeholder='Last Name'/>
    </div>
    <input className='bg-transparent border-2 border-solid border-[#7e61e7] my-[10px]  p-[5px] rounded-[5px] show ' type="email"placeholder='E-mail'/>
    <textarea className='bg-transparent border-2 border-solid border-[#7e61e7] my-[10px]  p-[5px] rounded-[5px] show' name="" id="" cols="50" rows="4" placeholder='Message'></textarea>
    <input className='text-black font-[500] cursor-pointer border-2 border-solid border-[#7e61e7] my-[10px] hover:bg-transparent hover:text-white p-[5px] rounded-[5px] bg-[#a993fe]' type="submit" />
</form>
 </div>
        </div>

    </div>
  )
}
