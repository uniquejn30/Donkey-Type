import { useState } from "react"

const CustomSecond = ({ setIsCustomSec, setIsEnter, second, setSecond, setIsTimer }) => {
 
  return (
   <div className="flex h-screen items-center justify-center z-[999]">
    <div className="max-w-[400px] max-h-[340px] dark:bg-[#383839] bg-[#D1D5DB] py-[30px] px-[25px] rounded-xl flex flex-col items-center">
     <h1 className="text-start w-full font-Roboto text-[24px] text-[#646669]" >Test duration</h1>
     <p className="text-start w-full text-[#646669] font-Roboto text-[13px] ml-[3px] mt-[15px]" >Total time: {second} seconds</p>
     <input type="number" value={second} onChange={(e) => {setSecond(e.target.value); setIsTimer(e.target.value || second)}}  className="dark:text-[#fff] text-black px-[12px] spin mt-[20px] mx-auto w-[100%] h-[40px] dark:bg-[#272727b2] rounded-md outline-none" />
     <p className="max-w-[100%] font-Roboto text-[13px] text-[#646669] mt-[18px]" >You cannot set the time 0. You have to set the time greater than 0 second.</p>
     <input type="button" value={'ok'} className="w-[100%] dark:bg-[#272727b2] bg-[#fff] py-[6px] mt-[20px] rounded-md dark:text-white text-black cursor-pointer" onClick={() => {setIsCustomSec(false); setIsEnter(false)}} />
    </div>
   </div>
  )
}

export default CustomSecond