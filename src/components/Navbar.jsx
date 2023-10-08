import {AiOutlineMenu , AiOutlineQuestionCircle} from 'react-icons/ai'
import { useState } from 'react'

function Navbar(){
  
    return(
        <>
     <div className='fixed w-full pt-4 m-0 sm:pt-0'>
        <div className="flex  items-center justify-between p-6 h-24 bg-red-700 text-white">
            <h1 className="text-4xl font-bold pl-10">DECalc</h1>
            <h1 className='text-4xl lg:hidden sm:block'><AiOutlineMenu /></h1>
            <div className="pt-9 pr-10 sm:hidden lg:block">
               
                <ul className="lg:flex lg:gap-20 items-center text-lg font-semibold">
                    <a href=""><li className="mb-10">Home</li></a>
                    <a href=""><li className="mb-10">Calculate</li></a>
                    <a href=""><li className="mb-10">About</li></a>
                    <a href=""><li className="mb-10 text-3xl"><AiOutlineQuestionCircle/></li></a>

                </ul>
            </div>
        </div>
     </div>
        </>
    )

}

export default Navbar