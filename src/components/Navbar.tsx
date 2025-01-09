import { Button } from 'flowbite-react';
import React, { useState, useEffect } from 'react';
import { useRef } from 'react';

interface NavProp {
  darkMode: boolean;
  setDarkMode: (prev: any) => void;
}

const Navbar = (props: NavProp) => {
  const { darkMode, setDarkMode } = props;
  //   const [darkMode, setDarkMode] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev: any) => !prev);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkRef = useRef<HTMLAnchorElement>(null);

  const onDownload = async () => {
    const pdfUrl =
      'https://s3.ap-southeast-1.amazonaws.com/resume.kiettranv.uk/KIET_TRAN_FULLSTACK.pdf';
    try {
      if (linkRef.current) {
        linkRef.current.href = pdfUrl;
        linkRef.current.download = 'KIET_TRAN_FULLSTACK.pdf';
        linkRef.current.click();
      }
    } catch (error) {
      console.error('Error downloading PDF:', error);
    } finally {
    }
  };

  return (
    <div
      className={`${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
      } fixed top-0 w-full shadow-md z-50`}
    >
      <nav className='container mx-auto px-4 py-3 flex items-center justify-between'>
        {/* Logo */}
        {/* <div className="text-xl font-bold">My Portfolio</div> */}
        <a href='#' ref={linkRef} style={{ display: 'none' }} />
        <div className='flex items-center space-x-4'>
          <button
            onClick={onDownload}
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
          >
            Download CV
          </button>
        </div>

        {/* Tabs */}
        <div className='hidden md:flex space-x-6'>
          <button
            onClick={() => scrollToSection('about')}
            className='hover:underline'
          >
            About
          </button>
          {/* <button onClick={() => scrollToSection("introduce")} className="hover:underline">
            Introduce
          </button> */}
          <button
            onClick={() => scrollToSection('technicals')}
            className='hover:underline'
          >
            Technicals
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className='hover:underline'
          >
            Projects
          </button>
          {/* <button onClick={() => scrollToSection("pet-projects")} className="hover:underline">
            Pet Project
          </button> */}
          <button
            onClick={() => scrollToSection('education')}
            className='hover:underline'
          >
            Education
          </button>
        </div>

        {/* Buttons */}
        <div className='flex items-center space-x-4'>
          <button
            onClick={toggleDarkMode}
            className='text-sm px-2 py-1 rounded border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition'
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </nav>

      {/* Scroll-to-top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition'
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Navbar;
