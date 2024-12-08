"use client"
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useUserAuth } from "@/_utils/auth-context";
import { updateItemAmount } from "@/_services/firebase-service";

const AmountButton = ({amount, setAmount, productId}) => {
  const { user } = useUserAuth();

  const add = () => {
    if (!user) {
      alert('You must log in first');
      return;
    }
    if (amount < 20) {
      const newAmount = amount + 1;
      setAmount(newAmount);
      updateItemAmount(user.uid, productId, newAmount);
    }
  }
  
  const subtract = () => {
    if (!user) {
      alert('You must log in first');
      return;
    }
    if (amount >= 1) {
      const newAmount = amount - 1;
      setAmount(newAmount);
      updateItemAmount(user.uid, productId, newAmount);
    }
  }

  return (
    amount === 0 ? 
    <div>
      <button className="w-10 h-10 rounded-full bg-green-800" onClick={add}>
        <p className="text-[24px]">+</p>
      </button>
    </div>
    :
    <div className="border-2 flex justify-center border-green-800 w-[200px] h-10 rounded-3xl">
      <div className="flex justify-between items-center w-[90%]">
        <button onClick={subtract}>
          {
            amount === 1 ?
            <FaTrashAlt color="green"/>
            :
            <p className="text-green-800 text-[28px] ml-2">-</p>
          }
        </button>
        <p className="text-green-800 text-[19px] font-semibold">{amount}</p>
        <button onClick={add} disabled={amount === 20 ? true : false} className={`${amount === 20 ? 'cursor-not-allowed' : ''}`}>
          <p className={ `text-[28px] ${amount === 20 ? 'text-gray-400' : 'text-green-800'}`}>+</p>
        </button>
      </div>
    </div>
  )
}


const Product = ({ cost, imageURL, name, productId, storedAmount }) => {
  const [amount, setAmount] = useState(storedAmount);
  return (
    <div className="w-[220px] h-[405px] bg-white m-3 border-2 border-gray-300 rounded-2xl">
      <div className="p-3">
        <img src={imageURL} className="w-[196px] h-[196px]"/>
        <div className="h-12">
          <p className="text-black font-mono text-[16px] mt-1">{name}</p>
        </div>
        <div className="flex mt-5">
          <p className="text-red-600 font-bold text-[18px] mr-[2px]">$</p>
          <p className="text-red-600 font-mono font-bold text-[18px] ">{cost}</p>
        </div>
        <div className="w-full flex items-center justify-center mt-6">
          <AmountButton amount={amount} setAmount={setAmount} productId={productId}/>
        </div>
      </div>
    </div>
  );
};

export default Product;