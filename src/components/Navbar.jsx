import { AiOutlineMenu, AiOutlineQuestionCircle } from 'react-icons/ai';
import { useState, useEffect } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    // Attach event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Detach event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: isScrolled ? 'transparent' : 'transparent', // Change background color as needed
    borderBottom: isScrolled ? '2px solid red' : 'none', // Add red border bottom when scrolled
    transition: 'background-color 0.3s ease, border-bottom 0.3s ease', // Add transition effect
    zIndex: 1000,
  };

  return (
    <>
      <div className='fixed w-full pt-4 m-0 sm:pt-0' style={navbarStyle}>
        <div className='flex items-center justify-between p-6 h-24 bg-white text-red-500'>
          <h1 className='text-4xl font-bold pl-10'>DECalc</h1>
          <h1 onClick={toggleNavbar} className='text-4xl lg:hidden sm:block'>
            <AiOutlineMenu />
          </h1>

          <div className={`${isOpen ? 'sm:block' : 'sm:hidden'}`}>
            <div className='bg-red-700 w-[310px] -mr-10 mt-[31em] h-[600px]'>
              <ul className='flex flex-col gap-20 pt-20 text-center justify-center items-center text-xl text-white lg:flex lg:flex-row lg:mt-0'>
                <a href=''>
                  <li className='mb-10 hover:underline'>Home</li>
                </a>
                <a href=''>
                  <li className='mb-10 hover:underline'>About</li>
                </a>
                <a href=''>
                  <li className='mb-10 text-center text-3xl hover:text-red-400'>
                    <AiOutlineQuestionCircle />
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
