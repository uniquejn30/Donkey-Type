import { useState, useEffect } from "react"

import BodyHeader from "./components/Body/BodyHeader"
import BodyMain from "./components/Body/BodyMain"
import BodyFooter from "./components/Body/BodyFooter"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import EscButton from "./components/EscButton/EscButton"
import NotificationBar from "./components/NotificationBar/NotificationBar"
import CustomSecond from "./components/CustomSecond/CustomSecond"
import Result from "./components/Result/Result"

function App() {

  // This useState is use to change the theme of our website...
  const [darkTheme, setDarkTheme] = useState(true)

  const [isNumber, setIsNumber] = useState(false) // This useState is to generate the number paragraph
  const [isPunctuation, setIsPunctuation] = useState(false) // This useState is to generate the punctuation paragraph
  const [isEsc, setIsEsc] = useState(false) // This useState is get the Esc Functionality...
  const [isFirstStart, setIsFirstStart] = useState(false);  // To check that the user starts typing or not

  const [isNotification, setIsNotification] = useState(false) // To get the Notification Slide bar
  const [isCustomSec, setIsCustomSec] = useState(false) // To get the custom time from the user
  const [isEnter, setIsEnter] = useState(false)
  const [second, setSecond] = useState(-1)

  const [isTimer, setIsTimer] = useState(-1) // To check the time starts or not

  const [completed, setCompleted] = useState(false);
  const [correctCharCount, setCorrectCharCount] = useState(0);
  const [incorrectCharCount, setInCorrectCharCount] = useState(0);

  const handleBodyMainCompletion = (isCompleted, correct, incorrect) => {
    setCorrectCharCount(correct);
    setInCorrectCharCount(incorrect);
    setCompleted(isCompleted);
  };

  // This function is use to make the shortcut (ESC) works...
  const handleKeyPress = (event) => {
    if (event.key === 'Escape' || event.ctrlKey && event.shiftKey && event.key === 'P') {
      event.preventDefault()
      setIsEsc((prevIsEsc) => !prevIsEsc);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="relative font-poppins w-full dark:bg-[#323437] bg-[#e1e1e3] h-screen flex flex-col justify-between py-[20px] px-[100px] items-center">
        <div className={`z-[999] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ${isEsc ? 'block' : 'hidden'}`}>
          <EscButton />
        </div>
        <div className="w-full">
          <Navbar setIsNotification={setIsNotification} isNotification={isNotification} />
        </div>

        <div onClick={() => { setIsCustomSec(false); setIsEnter(false) }} className={`w-[100vw] h-[100vh] bg-[#000000b1] absolute top-0 left-0 z-[99] backdrop-blur-[5px] ${isCustomSec ? 'block' : 'hidden'}`}>
        </div>
        <div className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[999] ${isCustomSec ? 'block' : 'hidden'}`}>
        <CustomSecond second={second} setSecond={setSecond} setIsCustomSec={setIsCustomSec} setIsEnter={setIsEnter} setIsTimer={setIsTimer} />
        </div>

        <div onClick={() => setIsNotification(!isNotification)} className={`min-w-[100vw] min-h-[100vh] absolute top-0 left-0 duration-300 backdrop-blur-[5px] ease-linear bg-[#0000008d] ${isNotification ? 'opacity-1 z-[95]' : 'opacity-0 -z-[99]'}`} />
        <div className={`right-0 z-[99] top-0 fixed duration-300 ease-linear shadow-2xl`}>
          <NotificationBar isNotification={isNotification} />
        </div>

        {completed
          ?

          <>
            <Result correctCharCount={correctCharCount} incorrectCharCount={incorrectCharCount} isTimer={isTimer} setIsTimer={setIsTimer} isNumber={isNumber} isPunctuation={isPunctuation} setCompleted={setCompleted} />
          </>

          :
          (<div className="flex-1 flex flex-col items-center justify-between py-[50px]">
            <BodyHeader isNumber={isNumber} setIsNumber={setIsNumber} isPunctuation={isPunctuation} setIsPunctuation={setIsPunctuation} setIsTimer={setIsTimer} isTimer={isTimer} setIsFirstStart={setIsFirstStart} isEsc={isEsc} isCustomSec={isCustomSec} setIsCustomSec={setIsCustomSec} isEnter={isEnter} setIsEnter={setIsEnter} />
            <BodyMain className='flex-1' isNumber={isNumber} isPunctuation={isPunctuation} isTimer={isTimer} setIsTimer={setIsTimer} isFirstStart={isFirstStart} setIsFirstStart={setIsFirstStart} isEnter={isEnter} setIsEnter={setIsEnter} onCompletion={handleBodyMainCompletion} isCustomSec={isCustomSec} setIsCustomSec={setIsCustomSec} />
            <BodyFooter />
          </div>)
        }

        <div className="w-full">
          <Footer darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        </div>
      </div>
    </div>
  )
}

export default App