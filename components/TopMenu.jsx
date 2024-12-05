"use client"
import React, { useState } from 'react';
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { FaSearch, FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import { useRouter } from 'next/navigation';


const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setIsOpened] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsOpened(true)}
      onMouseLeave={() => setIsOpened(false)}
      className="group relative px-4 py-2"
    >
      <div className='flex-row flex items-center justify-center'>
        <a href={href} className="relative text-white text-[12px]">
          {children}
          <span
            style={{
              transform: open && FlyoutContent ? "scaleX(1.2)" : "scaleX(0)"
            }}
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-[#014f36] transition-transform duration-300 ease-out"
          />
        </a>
        <div className='ml-2'>
          {open && FlyoutContent ? <SlArrowUp /> : <></>}
          {!open && FlyoutContent ? <SlArrowDown /> : <></>}
        </div>
      </div>
      {FlyoutContent && <FlyoutContent open={open} />}
    </div>
  );
};

const BottomFlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setIsOpened] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsOpened(true)}
      onMouseLeave={() => setIsOpened(false)}
      className="group relative px-4 py-2"
    >
      <div className='flex-row flex items-center justify-center mr-5'>
        <a href={href} className="relative text-gray-300 font-semibold text-[17px]">
          {children}
          <span
            style={{
              transform: open && FlyoutContent ? "scaleX(1.2)" : "scaleX(0)"
            }}
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-[#014f36] transition-transform duration-300 ease-out"
          />
        </a>
        <div className='ml-2'>
          {open && FlyoutContent ? <SlArrowUp /> : <></>}
          {!open && FlyoutContent ? <SlArrowDown /> : <></>}
        </div>
      </div>
      {FlyoutContent && <FlyoutContent open={open} />}
    </div>
  );
};

const AboutUs = ({ open }) => {
  return open ? (
    <ul className="absolute bg-[#016e4b] mt-2 w-[150px]">
      <a href="#" className="block px-4 py-2 text-white hover:underline">Our Story</a>
      <a href="#" className="block px-4 py-2 text-white hover:underline">Our Commitment</a>
      <a href="#" className="block px-4 py-2 text-white hover:underline">Our Community</a>
    </ul>
  ) : <></>;
};

const MainMenu = () => {
  const [searchText, setSearchText] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const router = useRouter();
  return (
    <div>
      <div className='bg-[#016e4b] h-[72px] justify-between flex items-center flex-row'>
        <div className='flex flex-row items-center ml-[60px]'>
          <button>
            <img src='/images/logo.png'
              alt="This is the main logo" 
              className="w-[200px]"
              onClick={() => router.push('/')}
            />
          </button>
          <div className='ml-[40px] flex flex-row items-center relative'>
            <FaSearch className='absolute left-4'/>
            <input
              type="text"
              placeholder="Search..."
              className='rounded-3xl w-[400px] h-[38px] text-black px-[40px]'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              maxLength={100}
            />
            {
              searchText ? <button className='text-black absolute right-4 text-xl' onClick={() => setSearchText('')}><p>×</p></button> : <></>
            }
          </div>
        </div>
        <div className='flex flex-row justify-between mr-[60px]'>
          <div className='flex flex-row justify-center items-center'>
            <CiLocationOn className='w-[24px] h-[24px]'/>
            <p className='underline w-[24px] h-[24px]'>L3T</p>
          </div>
          <div className='flex flex-row justify-center items-center ml-10'>
            <FaUserCircle className='h-[24px] w-[24px]'/>
            <p className='h-[24px]'>Log in/ Sign Up</p>
          </div>
          <div className="flex justify-center items-center ml-10">
            <IoMdNotifications className='h-[24px] w-[24px]'/>
          </div>
          <button>
            <div className='flex justify-center items-center ml-10 bg-white h-[40px] w-[120px] rounded-3xl'>
              <FaShoppingCart className='h-[24px] w-[24px]' color='black'/>
              <p className='text-black font-semibold ml-3 mt-1'>Cart {cartCount !== 0 ? `(${cartCount})` : ''}</p>
            </div>
          </button>
        </div>
      </div>
      <div className='bg-[#007852] h-[48px] flex items-center relative'>
        <div className='ml-10 flex flex-row'>
          <BottomFlyoutLink href="#" FlyoutContent={Category}>Category</BottomFlyoutLink>
          <BottomFlyoutLink href="#">Hot Deals</BottomFlyoutLink>
          <BottomFlyoutLink href="#">Group Orders</BottomFlyoutLink>
          <BottomFlyoutLink href="#">I&I Private Label</BottomFlyoutLink>
          <BottomFlyoutLink href="#">Gift Ideas</BottomFlyoutLink>
        </div>
      </div>
    </div>
  )
}

const Category = ({ open }) => {
  return open ? (
    <div className="absolute bg-white mt-[10px] left-1 h-[100px] w-[500px] rounded-r-lg rounded-bl-lg rounded-br-lg">
      <ul className="flex flex-row h-[100px] justify-center items-center">
        <a href="#" className="block px-4 mr-4 py-2 hover:underline">Our Story</a>
        <a href="#" className="block px-4 mr-4 py-2 hover:underline">Our Commitment</a>
        <a href="#" className="block px-4 py-2 hover:underline">Our Community</a>
      </ul>
    </div>
  ) : <></>;
}


const TopMenu = () => {
  return (
    <div>
      <div className="bg-[#007852] h-[34px] flex items-center justify-between">
        <div className="flex-row flex items-center justify-center ml-10">
          <FlyoutLink href="#" FlyoutContent={AboutUs}>About Us</FlyoutLink>
          <FlyoutLink href="#">News</FlyoutLink>
          <FlyoutLink href="#">Rewards</FlyoutLink>
          <FlyoutLink href="#">In-Store Flyer</FlyoutLink>
          <FlyoutLink href="#">Store Locator</FlyoutLink>
          <FlyoutLink href="#">Career</FlyoutLink>
        </div>
        <div className="mr-10 flex-row flex items-center justify-center">
          <FlyoutLink href="#">Help Center</FlyoutLink>
          <p>|</p>
          <FlyoutLink href="#">My Favourites</FlyoutLink>
          <p>|</p>
          <FlyoutLink href="#">My Orders</FlyoutLink>
        </div>
      </div>
      <div>
        <MainMenu/>
      </div>
    </div>
  );
};

export default TopMenu;