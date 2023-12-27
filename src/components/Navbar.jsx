import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showSolveMenu, setShowSolveMenu] = useState(false);

  const handleSolveClick = () => {
    setShowSolveMenu(!showSolveMenu);
  };

  const handleMenuItemClick = () => {
    setShowSolveMenu(false);
  };

  return (
    <>
      <div className='bg-red-500 fixed w-screen'>
        <div className='bg-red-500 flex gap-4 mx-5 my-10 items-center justify-between lg:gap-60 lg:mx-36 lg:my-5 md:flex md:gap-10 md:mx-32'>
          <div className=''>
            
              <Link to="/"><p className='text-4xl font-bold text-white cursor-pointer lg:text-5xl'>DESolver</p></Link>
             
          </div>
          
          <div>
            <ul className='flex gap-10 list-none font-bold text-white text-lg lg:gap-28 lg:text-xl'>
              <div onClick={handleSolveClick}>
              <li className='hover:text-black hover:cursor-pointer'>Solve</li>
                {showSolveMenu && (
                  <div className='absolute bg-red-200 h-70 text-base px-5 justify-center items-center pb-10 -ml-28 rounded-xl mt-6 text-red-800'>
                    <a href="#class"><li className='pt-10' onClick={handleMenuItemClick}>Classification</li></a>
                    <a href="#growth"><li className='pt-10' onClick={handleMenuItemClick}>Growth and Decay</li></a>
                    <a href="#newton"><li className='pt-10' onClick={handleMenuItemClick}>Newton's Law Cooling/Heating</li></a>
                  </div>
                )}
              </div>
              <Link to="/about"><li className='hover:text-black hover:cursor-pointer'>About</li></Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
