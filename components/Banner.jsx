"use client"

import { CgShoppingCart } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";

const Banner = ({ content }) => {
  const [ isClicked, setIsClicked ] = useState(false) 
  return (
      isClicked === true ? <></> : (
        <div className="h-[48px] bg-[#9c1921] flex-row flex items-center justify-center">
          <div className="flex items-center">
            <CgShoppingCart className="mr-2" />
            <p className="text-center">{content}</p>
          </div>
          <button className="ml-20" onClick={() => setIsClicked(!isClicked)}>
            <VscChromeClose />
            </button>
        </div>
      )
  );
};

export default Banner;