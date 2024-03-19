import React, { useState } from 'react';
import { FiHome } from "react-icons/fi";
import { FaMoneyBills } from "react-icons/fa6";
import { GiCaptainHatProfile } from "react-icons/gi";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { CiGift } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import Logo from '../assets/images/Logo.jpg'
import SmallLogo from '../assets/images/blox-small.svg'
import { MdMenu } from "react-icons/md";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { LuBitcoin } from "react-icons/lu";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  
  const handleItemClick = (item) => {
    setActiveItem(item);
    // You can add additional logic here, such as navigating to a different page
  };
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
<header className="text-white flex flex-col fixed top-0 left-0 w-full z-10">
  <nav className="bg-head  md:px-[120px] flex gap-6">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-10 relative">
        {/* Logo */}
        <Link to="/" className="hidden md:block flex-shrink-0">
          <img src={Logo} alt="" className='w-[170px] h-[70px]' />
        </Link>

        <div className="md:hidden" onClick={toggleMenu}>
          {/* Replace with your menu icon */}
          <svg className="w-6 h-6 text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </div>

        <Link to="/" className="block md:hidden items-center ml-[30px]">
          <img src={Logo} alt="" className='w-[60px] h-[60px]' />
        </Link>

        
        <p className="text-white text-sm hidden md:block px-4">Need device repairs at unbeatable prices? Our expert technicians have you covered! From smartphones to laptops, we fix it all </p>
      </div>
    </nav>

      <div className="hidden md:bg-white md:flex flex-row  md:items-center md:px-[200px] md:py-3 h-[75px] pl-[200px] border-3 border-green-600">
       <Link to="/" className={`mr-6 cursor-pointer flex flex-row gap-2 w-[95px] h-[35px] items-center justify-center hover:bg-blue-100 hover:text-blue-400 rounded-lg ${activeItem === 'home' ? 'text-white bg-menu' : 'text-gray-500 hover:text-blue-500'}`} 
          onClick={() => handleItemClick('home')}>
             <span><FiHome/></span>
             <span className='text-sm'>Home</span>
        </Link>

        <Link to="/repair" className={`mr-6 cursor-pointer flex flex-row gap-2 w-[95px] h-[35px] items-center justify-center hover:bg-blue-100 hover:text-blue-400 rounded-lg ${activeItem === 'repair' ? 'text-white bg-menu' : 'text-gray-500 hover:text-blue-500'}`} 
          onClick={() => handleItemClick('repair')}>
            <span><FaMoneyBills /></span>
            <span className='text-sm'>Repairs</span>
        </Link>

        <Link to="/policy" className={`mr-6 cursor-pointer flex flex-row gap-2 w-[95px] h-[35px] items-center justify-center hover:bg-blue-100 hover:text-blue-400 rounded-lg ${activeItem === 'policy' ? 'text-white bg-menu' : 'text-gray-500 hover:text-blue-500'}`} 
          onClick={() => handleItemClick('policy')}>
            <span><FaMoneyBills /></span>
            <span className='text-sm'>Policies</span>
        </Link>

        <Link to="/warranty" className={`mr-6 cursor-pointer flex flex-row gap-2 w-[95px] h-[35px] items-center justify-center hover:bg-blue-100 hover:text-blue-400 rounded-lg ${activeItem === 'warranty' ? 'text-white bg-menu' : 'text-gray-500 hover:text-blue-500'}`} 
          onClick={() => handleItemClick('warranty')}>
            <span><FaMoneyBills /></span>
            <span className='text-sm'>Warranty</span>
        </Link>

        <Link to="/buy" className={`mr-6 cursor-pointer flex flex-row gap-2 w-[150px] h-[35px] items-center justify-center hover:bg-blue-100 hover:text-blue-400 rounded-lg ${activeItem === 'buy' ? 'text-white bg-menu' : 'text-gray-500 hover:text-blue-500'}`} 
          onClick={() => handleItemClick('buy')}>
            <span><FaMoneyBills /></span>
            <span className='text-sm'>Buy/Sell/Trade</span>
        </Link>

        

       
        <Link to='/faq' className={`mr-6 cursor-pointer flex flex-row gap-2 w-[95px] h-[35px] items-center justify-center hover:bg-blue-100 hover:text-blue-400 rounded-lg ${activeItem === 'faq' ? 'text-white bg-menu' : 'text-gray-500 hover:text-blue-500'}`} 
          onClick={() => handleItemClick('faq')}>
            <span>< FaRegQuestionCircle  /></span>
            <span className='text-sm'>FAQ</span>
        </Link>

        <Link to='/contact' className={`mr-6 cursor-pointer flex flex-row gap-2 w-[95px] h-[35px] items-center justify-center hover:bg-blue-100 hover:text-blue-400 rounded-lg ${activeItem === 'contact' ? 'text-white bg-menu' : 'text-gray-500 hover:text-blue-500'}`} 
          onClick={() => handleItemClick('contact')}>
            <span><FaRegEnvelope /></span>
            <span className='text-sm'>Contact</span>
        </Link>

        <Link to='/about' className={`mr-6 cursor-pointer flex flex-row gap-2 w-[95px] h-[35px] items-center justify-center hover:bg-blue-100 hover:text-blue-400 rounded-lg ${activeItem === 'about' ? 'text-white bg-menu' : 'text-gray-500 hover:text-blue-500'}`} 
          onClick={() => handleItemClick('about')}>
            <span><FaRegEnvelope /></span>
            <span className='text-sm'>About Us</span>
        </Link>
      </div>
      
      
      {isMenuOpen && (
        <motion.nav initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }} className="md:hidden absolute top-[75px] gap-3 left-0 border-x-2 border-shadow-lg  w-[300px] border-shadow-lg bg-white p-4 rounded flex flex-col items-start  ">
          <Link to="/" className={`mr-6 cursor-pointer flex pl-3 flex-row gap-2 w-[220px] h-[45px] items-center  hover:bg-blue-100 hover:text-blue-400 rounded-lg ${activeItem === 'home' ? 'text-white bg-menu' : 'text-gray-500 hover:text-blue-500'}`} 
            onClick={() => handleItemClick('home')}>
              <span><FiHome/></span>
              <span className='text-sm'>Home</span>
          </Link>

          <Link to="/repair" className={`mr-6 cursor-pointer flex pl-3 flex-row gap-2 w-[220px] h-[45px] items-center  hover:bg-blue-100 hover:text-blue-400 rounded-lg ${activeItem === 'repair' ? 'text-white bg-menu' : 'text-gray-500 hover:text-blue-500'}`} 
          onClick={() => handleItemClick('repair')}>
            <span><FaMoneyBills /></span>
            <span className='text-sm'>Repair</span>
          </Link>


          <Link to="/policy" className={`mr-6 cursor-pointer flex pl-3 flex-row gap-2 w-[220px] h-[45px] items-center  hover:bg-blue-100 hover:text-blue-400 rounded-lg ${activeItem === 'policy' ? 'text-white bg-menu' : 'text-gray-500 hover:text-blue-500'}`} 
          onClick={() => handleItemClick('policy')}>
            <span><FaMoneyBills /></span>
            <span className='text-sm'>Policies</span>
          </Link>

          <Link to="/warranty" className={`mr-6 cursor-pointer flex pl-3 flex-row gap-2 w-[220px] h-[45px] items-center  hover:bg-blue-100 hover:text-blue-400 rounded-lg ${activeItem === 'warranty' ? 'text-white bg-menu' : 'text-gray-500 hover:text-blue-500'}`} 
          onClick={() => handleItemClick('warranty')}>
            <span><FaMoneyBills /></span>
            <span className='text-sm'>Warranty</span>
          </Link>


          <Link to="/buy" className={`mr-6 cursor-pointer flex pl-3 flex-row gap-2 w-[220px] h-[45px] items-center  hover:bg-blue-100 hover:text-blue-400 rounded-lg ${activeItem === 'buy' ? 'text-white bg-menu' : 'text-gray-500 hover:text-blue-500'}`} 
          onClick={() => handleItemClick('buy')}>
            <span><FaMoneyBills /></span>
            <span className='text-sm'>Buy/sell/trade</span>
          </Link>


        
        <Link to="/faq" className={`mr-6 cursor-pointer flex flex-row gap-2 pl-3 w-[220px] h-[45px] items-center  hover:bg-blue-100 hover:text-blue-400 rounded-lg ${activeItem === 'faq' ? 'text-white bg-menu' : 'text-gray-500 hover:text-blue-500'}`} 
          onClick={() => handleItemClick('faq')}>
            <span>< FaRegQuestionCircle  /></span>
            <span className='text-sm'>FAQ</span>
        </Link>

        <Link to="/contact" className={`mr-6 cursor-pointer flex flex-row gap-2 pl-3 w-[220px] h-[45px] items-center  hover:bg-blue-100 hover:text-blue-400 rounded-lg ${activeItem === 'contact' ? 'text-white bg-menu' : 'text-gray-500 hover:text-blue-500'}`} 
          onClick={() => handleItemClick('contact')}>
            <span><LuBitcoin /></span>
            <span className='text-sm'>Contact</span>
        </Link>

        <Link to="/about" className={`mr-6 cursor-pointer flex flex-row gap-2 pl-3 w-[220px] h-[45px] items-center  hover:bg-blue-100 hover:text-blue-400 rounded-lg ${activeItem === 'about' ? 'text-white bg-menu' : 'text-gray-500 hover:text-blue-500'}`} 
          onClick={() => handleItemClick('about')}>
            <span><LuBitcoin /></span>
            <span className='text-sm'>About Us</span>
        </Link>
        </motion.nav>
      )}
    </header>
      
      </>
  );
};

export default Header;

