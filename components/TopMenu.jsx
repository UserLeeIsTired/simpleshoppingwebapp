"use client"
import React, { useState } from 'react';
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

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

const AboutUs = ({ open }) => {
  return open ? (
    <ul className="absolute bg-[#016e4b] mt-2 w-[150px]">
      <a href="#" className="block px-4 py-2 text-white hover:underline">Our Story</a>
      <a href="#" className="block px-4 py-2 text-white hover:underline">Our Commitment</a>
      <a href="#" className="block px-4 py-2 text-white hover:underline">Our Community</a>
    </ul>
  ) : <>  </>;
};

const TopMenu = () => {
  return (
    <div className="bg-[#007852] h-[34px] flex items-center justify-between">
      <div className="flex-row flex items-center justify-center">
        <FlyoutLink href="#" FlyoutContent={AboutUs}>About Us</FlyoutLink>
        <FlyoutLink href="#">News</FlyoutLink>
        <FlyoutLink href="#">Rewards</FlyoutLink>
        <FlyoutLink href="#">In-Store Flyer</FlyoutLink>
        <FlyoutLink href="#">Store Locator</FlyoutLink>
        <FlyoutLink href="#">Career</FlyoutLink>
      </div>
      <div className="mr-5 flex-row flex items-center justify-center">
        <FlyoutLink href="#">Help Center</FlyoutLink>
        <p>|</p>
        <FlyoutLink href="#">My Favourites</FlyoutLink>
        <p>|</p>
        <FlyoutLink href="#">My Orders</FlyoutLink>
      </div>
    </div>
  );
};

export default TopMenu;