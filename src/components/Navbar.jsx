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
       <div>
          <div>
            <div>

            </div>
            <ul>
              <li></li>
            </ul>
          </div>
       </div>
    </>
  );
}

export default Navbar;
