    import React, {useEffect, useState} from "react";
    import { IoIosArrowForward } from "react-icons/io";
    import { FiRefreshCw } from "react-icons/fi";
    import { FaExclamationTriangle } from "react-icons/fa";
    import { CgMenuLeftAlt } from "react-icons/cg";
    import { FaBackward } from "react-icons/fa6";
    import { FaImage } from "react-icons/fa";
    // import Charts from "../Result/Charts";
    import TooltipButton from "../TooltipButton/TooltipButton";

    const Result = ({correctCharCount, incorrectCharCount, isTimer, setIsTimer, isNumber, isPunctuation, setCompleted}) => {
        const totalCharCount = correctCharCount + incorrectCharCount;
        const elapsedMinutes = isTimer / 60;
        const wpm = Math.floor((correctCharCount / 5) / (elapsedMinutes === 0 ? 1 : elapsedMinutes)) || 0;
        const iwpm = Math.floor((incorrectCharCount / 5) / (elapsedMinutes === 0 ? 1 : elapsedMinutes)) || 0;
        const accuracy = Math.floor((correctCharCount / (totalCharCount)) * 100) || 0;
        const consistency = Math.floor((correctCharCount / (incorrectCharCount === 0 ? totalCharCount : totalCharCount + incorrectCharCount)) * 100) || 0;

        // useEffect(() => {
        //     const sendDataToBackend = async () => {
        //         try {
        //             const response = await fetch('/api/results', {
        //             method: "POST",
        //             headers: {
        //                 "Content-Type": "application/json",
        //             },
        //             body: JSON.stringify({
        //                 wpm,
        //                 accuracy,
        //                 consistency,
        //                 isTimer,
        //             }),
        //             });

        //             console.log(response);
            
        //             if (response.ok) {
        //             console.log("Data sent successfully");
        //             } else {
        //             console.log("Failed to send data to backend");
        //             }
        //         } catch (error) {
        //             console.error(error);
        //         }
        //     };
            
        //     sendDataToBackend();
        // }, [wpm, accuracy, consistency, isTimer]);

        return (
            <div className="font-Roboto total-result w-full bg-transparent flex flex-col gap-7">
                <div className="result flex gap-10">
                    <div className="stats w-[100px] flex flex-col">
                    <div className="group-wpm flex flex-col items-start">
                        <div className="top text-[#5e6063] text-3xl">wpm</div>

                        <div className="bottom text-[#e2b714] text-6xl">{wpm}</div>
                    </div>

                    <div className="group-acc flex flex-col items-start">
                        <div className="text-[#5e6063] text-3xl">acc</div>

                        <div className="text-[#e2b714] text-6xl">{accuracy}%</div>
                    </div>
                    </div>

                    {/* <div className="chart flex-1 bg-transparent">
                        <Charts isTimer={isTimer} correctCharCount={correctCharCount} incorrectCharCount={incorrectCharCount}/>
                    </div> */}
                </div>

                <div className="stats morestats flex justify-between">
                    <div className="group testType">
                    <div className="top">test type</div>
                    <div className="bottom flex flex-col">
                        time {isTimer} <br /> english <br /> 
                        {isNumber && !isPunctuation && <span> numbers</span>}
                        {!isNumber && isPunctuation && <span> punctuation</span>}
                        {isNumber && isPunctuation && <span> numbers <br /> punctuation</span>}
                    </div>
                    </div>
                    <div className="group other">
                        <div className="top">other</div>
                        <div className="bottom">{correctCharCount + incorrectCharCount == 0 ? "invalid" : "valid"}</div>
                    </div>
                    <div className="group raw">
                        <div className="top">raw</div>
                        <div className="bottom size">{wpm - iwpm < 0 ? 0 : wpm - iwpm}</div>
                    </div>
                    <div className="group characters">
                        <div className="top">characters</div>
                        <div className="bottom size">{correctCharCount}/{incorrectCharCount}/0/0</div>
                    </div>
                    <div className="group consistency">
                        <div className="top">consistency</div>
                        <div className="bottom size">{consistency}%</div>
                    </div>
                    <div className="group time">
                        <div className="top">time</div>
                        <div className="bottom size">{isTimer}s</div>
                    </div>
                </div>

                <div className="links w-full flex justify-center gap-20 text-[#5e6063] text-xl">
                    <TooltipButton
                    icon={<IoIosArrowForward />}
                    tooltipText="Next test"
                    />
                    <TooltipButton
                    icon={<FiRefreshCw />}
                    tooltipText="Repeat test"
                    onClickHandler={() => {
                        setCompleted(false);
                        setIsTimer(-1);
                    }}
                    />
                    <TooltipButton
                    icon={<FaExclamationTriangle />}
                    tooltipText="Practice words"
                    />
                    <TooltipButton
                    icon={<CgMenuLeftAlt />}
                    tooltipText="Toggle words history"
                    />
                    <TooltipButton
                    icon={<FaBackward />}
                    tooltipText="Watch replay"
                    />
                    <TooltipButton
                    icon={<FaImage />}
                    tooltipText="Copy screenshot to clipboard"
                    />
                </div>

                <div className="loginTip w-full text-center text-[#5e6063]">
                    <a href="/" className="login">Sign in</a> to save your result
                </div>
            </div>
        );
    };

    export default Result;
