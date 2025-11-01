import React, { useState, useEffect } from 'react';
import { ReactComponent as NavbarSVG } from '../assets/navbar.svg';
import { ReactComponent as ButtonSVG } from '../assets/applyButton.svg';

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY < lastScrollY) {
        setShow(true);  // scrolling up
      } else {
        setShow(false); // scrolling down
      }
      setLastScrollY(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex flex-col items-center">
        <NavbarSVG className="w-full" />
        <div className="mt-[-4px]"> {/* adjust spacing if needed */}
          <ButtonSVG className="w-12 h-12" />
        </div>
      </div>
    </div>
  );
}
