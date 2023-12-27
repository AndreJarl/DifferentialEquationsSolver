
import React from 'react'
import { AiFillLinkedin, AiFillFacebook, AiFillGithub} from 'react-icons/ai';


function Footer() {
  return (
    <div className=' bg-red-600 py-5 px-10 flex flex-col content-center items-center'>
       <div className="flex flex-col content-between items-center gap-3 mb-5 mt-4 lg:flex lg:flex-row lg:gap-72 text-white">
            
                <div className="">
                  <h1 className='text-4xl font-bold text-white'>DESolver</h1>
                </div>
              
                <div className='flex gap-5 '>
                    <a href=""><h1 className='text-4xl'><AiFillLinkedin/></h1></a>
                    <a href="https://www.facebook.com/profile.php?id=100078410717230"><h1 className='text-4xl'><AiFillFacebook/></h1></a>
                    <a href="https://github.com/AndreJarl/AnimeASFF"><h1 className='text-4xl'><AiFillGithub /></h1></a>
                </div>

         </div>
         <p style={{fontSize: '13px', textAlign: 'center', color: 'white'}}>created by Group 3 2023</p>
         <div className='text-xs text-white text-center mt-5 mx-1 lg:mx-40 '> 
                    <p>Cebu Technological University Danao Campus <br/>
                        Final requirement for EMATH 213.
                    </p>
        </div>
    </div>
  )
}

export default Footer