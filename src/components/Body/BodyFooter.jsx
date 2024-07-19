import React from 'react'

const BodyFooter = () => {
    return (
        <div className="font-Roboto flex flex-col items-center gap-2 text-[#646669] text-[12px] cursor-default select-none">
            <h1><span className='px-[5px] py-[0] dark:bg-[#646669] bg-white dark:text-[#3c393f] text-black rounded-[2px]'>tab</span> + <span className='px-[5px] py-[0] dark:bg-[#646669] bg-white dark:text-[#3c393f] text-black rounded-[2px]'>enter</span> - restart test</h1>

            <h1><span className='px-[5px] py-[0] dark:bg-[#646669] bg-white dark:text-[#3c393f] text-black rounded-[2px]'>esc</span> or <span className='px-[5px] py-[0] dark:bg-[#646669] bg-white dark:text-[#3c393f] text-black rounded-[2px]'>ctrl</span> + <span className='px-[5px] py-[0] dark:bg-[#646669] bg-white dark:text-[#3c393f] text-black rounded-[2px]'>shift</span> + <span className='px-[5px] py-[0] dark:bg-[#646669] bg-white dark:text-[#3c393f] text-black rounded-[2px]'>p</span> - command line</h1>
        </div>
    )
}

export default BodyFooter