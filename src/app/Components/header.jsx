"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth > 767) {
        setIsMobileMenuOpen(false);
      }
    };

    // Call handleResize initially to set the initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header id="header" className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="logo">
          <Link href="/" className="flex items-center">
            <Image src="/assets/logo.png" alt="Logo" width={32} height={32} className="h-8" />
            <span className="ml-2 text-xl font-bold">AKESHYA</span>
          </Link>
        </div>

        {/* Hamburger menu button for mobile */}
        {screenWidth <= 767 ? (
      <GiHamburgerMenu  onClick={toggleMobileMenu} className="md:hidden flex items-center text-2xl"/> 
        ):  <nav id="navbar" className="hidden md:flex">
        <ul className="flex space-x-6">
          <li><Link href="#hero" className="nav-link scrollto text-blue-600">Home</Link></li>
          <li><Link href="/about" className="nav-link scrollto text-gray-600">About</Link></li>
          <li><Link href="/#services" className="nav-link scrollto text-gray-600">Services</Link></li>
          <li><Link href="/contact" className="getstarted scrollto text-white bg-[#14279b] py-2 px-4 rounded-3xl hover:text-white">Contact us</Link></li>
        </ul>
        <button className="md:hidden flex items-center">
          <i className="bi bi-list text-2xl"></i>
        </button>
      </nav>}

        {/* Mobile full-screen popup menu */}
        {isMobileMenuOpen && screenWidth <= 767 && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-md p-8 rounded-md shadow-md">
              <nav id="navbar" className="flex flex-col space-y-4">
                <Link href="#hero" className="nav-link scrollto text-blue-600">
                  Home
                </Link>
                <Link href="/about" className="nav-link scrollto text-gray-600">
                  About
                </Link>
                <Link href="#services" className="nav-link scrollto text-gray-600">
                  Services
                </Link>
                <Link href="/contact" className="getstarted scrollto text-white bg-blue-600 py-2 px-4 rounded">
                  Contact us
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
