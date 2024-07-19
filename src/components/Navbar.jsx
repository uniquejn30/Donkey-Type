import React from 'react';
import { FaRegKeyboard } from "react-icons/fa";
import { FaChessKing } from "react-icons/fa6";
import { IoInformation } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { PiBellRingingFill } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import logo from '../assets/images/logo.png'


function Navbar({ isNotification, setIsNotification }) {
    return (
        <div className='w-[100%] flex items-center'>
            <a href="/" className='flex gap-1.5 cursor-pointer items-center'>
                <div className="icon items-center">
                    {/* <GiAbstract049 style={{ width: '30px', height: '50px', color: '#E2B714' }} /> */}
                    <img src={logo} alt="logo" className='w-[2.5rem]'/>
                </div>

                <h1 className="text relative flex items-center text-3xl dark:text-[#d1d0c5] text-[#323437]">
                    <div className="absolute -top-[48%] left-[2%] text-[.6rem] text-[#646669]">donkey see</div>
                    <span className='font-medium'>donkeytype</span>
                </h1>
            </a>


            <div className="nav flex flex-1 justify-between ml-5">
                <div className="links flex w-[180px] items-center gap-6 text-[#646669]">
                        <FaRegKeyboard title='start test' className='icons cursor-pointer hover:text-black dark:hover:text-white transition-all ease-in-out duration-500'/>
                        <FaChessKing title='leaderboard' className='icons cursor-pointer hover:text-black dark:hover:text-white transition-all ease-in-out duration-500 '/>
                        <IoInformation title='about' className='icons cursor-pointer hover:text-black dark:hover:text-white transition-all ease-in-out duration-500 '/>
                        <IoMdSettings title='settings' className='icons cursor-pointer hover:text-black dark:hover:text-white transition-all ease-in-out duration-500 '/>
                </div>

                <div className="account-info flex items-center gap-6 text-[#646669]">
                    <PiBellRingingFill onClick={() => setIsNotification(!isNotification)} className='icons cursor-pointer hover:text-black dark:hover:text-white transition-all ease-in-out duration-500 '/>
                    <IoPersonOutline className='icons cursor-pointer hover:text-black dark:hover:text-white transition-all ease-in-out duration-500 '/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;