import {AiOutlineMenu} from 'react-icons/ai'

function Navbar(){
  
    return(
        <>
        <div className=" flex items-center justify-between p-6 bg-red-500 text-white z-50">
            <h1 className="text-2xl font-semibold">DECalc</h1>
            <h1 className='text-4xl'><AiOutlineMenu /></h1>
            <div className="sm:absolute sm:hidden sm:right-0 sm:top-0 bg-red-500 w-1/2 h-full p-4 flex  " >
               
                <ul className="sm:flex-col sm:gap-10 sm:mb-10 sm:text-2xl sm:text-center sm:ml-5 text-white font-medium sm:pt-16">
                    <a href=""><li className="mb-10">Home</li></a>
                    <a href=""><li className="mb-10">Calculate</li></a>
                    <a href=""><li className="mb-10">About</li></a>
                    <a href=""><li className="mb-10">?</li></a>

                </ul>
            </div>
        </div>
        </>
    )

}

export default Navbar