import { IoMail, IoLogoDiscord,IoNewspaperSharp, IoLockClosedSharp } from "react-icons/io5";
import { MdContactSupport, MdOutlineSecurity, MdOutlineScatterPlot } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";

const Footer = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="w-full flex items-center justify-between" >
      <div className="flex items-center justify-center">
        <a href="https://aadhar631.github.io/aadhar-portfolio/" target="_blank">
        <div className="flex justify-center items-center text-[#646669] hover:text-black dark:hover:text-white cursor-pointer transition-all ease-in-out duration-500">
          <IoMail className='text-[15px]' />
          <h1 className="ml-[5px] text-[15px]">Contact</h1>
        </div>
        </a>

        <div className="flex justify-center items-center ml-[15px] text-[#646669] hover:text-black dark:hover:text-white cursor-pointer transition-all ease-in-out duration-500">
          <MdContactSupport className='text-[15px]' />
          <a target="_blank" href="https://www.linkedin.com/in/aadhar-jain-243a71299/" className="ml-[5px] text-[15px]">LinkedIn</a>
        </div>

        <div className="flex justify-center items-center ml-[15px] text-[#646669] hover:text-black dark:hover:text-white cursor-pointer transition-all ease-in-out duration-500">
          <FaCode className='text-[15px]' />
          <a target="_blank" href="https://github.com/aadhar631" className="ml-[5px] text-[15px]">Github</a>
        </div>

        <div className="flex justify-center items-center ml-[15px] text-[#646669] hover:text-black dark:hover:text-white cursor-pointer transition-all ease-in-out duration-500">
          <IoLogoDiscord className='text-[15px]' />
          <h1 className="ml-[5px] text-[15px]">Discord</h1>
        </div>

        <div className="flex justify-center items-center ml-[15px] text-[#646669] hover:text-black dark:hover:text-white cursor-pointer transition-all ease-in-out duration-500">
          <FaTwitter className='text-[15px]' />
          <h1 className="ml-[5px] text-[15px]">Twitter</h1>
        </div>

        <div className="flex justify-center items-center ml-[15px] text-[#646669] hover:text-black dark:hover:text-white cursor-pointer transition-all ease-in-out duration-500">
          <IoNewspaperSharp className='text-[15px]' />
          <h1 className="ml-[5px] text-[15px]">Terms</h1>
        </div>

        <div className="flex justify-center items-center ml-[15px] text-[#646669] hover:text-black dark:hover:text-white cursor-pointer transition-all ease-in-out duration-500">
          <MdOutlineSecurity className='text-[15px]' />
          <h1 className="ml-[5px] text-[15px]">Security</h1>
        </div>

        <div className="flex justify-center items-center ml-[15px] text-[#646669] hover:text-black dark:hover:text-white cursor-pointer transition-all ease-in-out duration-500">
          <IoLockClosedSharp className='text-[15px]' />
          <h1 className="ml-[5px] text-[15px]">Privacy</h1>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex justify-center items-center ml-[15px] text-[#646669] hover:text-black dark:hover:text-white cursor-pointer transition-all ease-in-out duration-500"
        onClick={() => setDarkTheme((prev) => !prev)}
        >
          <IoMdColorPalette className='text-[15px]' />
          <h1 className="ml-[5px] text-[15px]">{darkTheme ? 'Light Theme' : 'Dark Theme'}</h1>
        </div>

        <div className="flex justify-center items-center ml-[15px] text-[#646669] hover:text-black dark:hover:text-white cursor-pointer transition-all ease-in-out duration-500">
          <MdOutlineScatterPlot className='text-[15px]' />
          <h1 className="ml-[5px] text-[15px]">v23.51.0</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer