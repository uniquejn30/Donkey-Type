import { IoSearch } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

const EscButton = () => {
 return (
  <div className="min-w-[100vw] min-h-[100vh] bg-[#000000b8] flex items-center justify-center">
   <div className="flex flex-col dark:bg-[#323437] bg-gray-300 py-[15px] rounded-[10px] min-w-[600px] min-h-[85vh]  max-h-[85vh] font-Roboto text-[#595A5E]">
    <div className="flex items-center gap-[10px] text-[20px] text-[#646669] px-[20px]">
     <IoSearch />
     <input type="text" placeholder="Type to search" className="flex-1 font-Roboto bg-transparent placeholder:text-[#646669] placeholder:font-Roboto outline-none " />
    </div>
    <div className="flex flex-col text-[15px] mt-[20px] gap-[10px] flex-1 overflow-auto  scrollbar text-[#646669] font-Roboto">
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Punctuation...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" ># Numbers...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Mode...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Time...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Words...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Quote Length...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Change custom text...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Search for  quotes...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Share test settings...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Result saving...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Difficulty...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Quick restart...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Repeat quotes...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Blind mode...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Always show words histor...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Single list command line...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Minimum speed...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Minimum accuracy...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Minimum burst...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Language...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ British english...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Funbox...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Custom layoutfluid...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Freedom mode...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ strict mode...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Change opposite shift mode...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Stop on error...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Confidence mode...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Quick end...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Indicate types...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Hide extra letters...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Lazy mode...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Layout emulator...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Sound volume...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Sound on click...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Sound on error...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Smooth carpet...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Caret style...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Pace caret mode...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Repeated pace...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Pace carpet style...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Live progress style...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Live progress color...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Live progress opacity...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Highlight mode...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Tape mode...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Smooth line scroll...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Show all lines...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Typing speed unit...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Always show decimal places...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Start graphs at zero...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Font size...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Font family...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Page width...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Keymap mode...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Keymap legend style...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Keymap layout...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Keymap show top row...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Theme...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Custom theme...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Flip test colors...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Colorful mode...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Add current theme to favorite...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Custom background...</h1>
     <h1 className="px-[25px] py-[2px] cursor-pointer hover:bg-[#D1D0C5] hover:text-black" >@ Custom background size...</h1>
    </div>
   </div>
  </div>
 )
}

export default EscButton