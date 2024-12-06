"use client"

import TopMenu from "../../components/TopMenu";
import { useUserAuth } from "@/_utils/auth-context";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';

const ListItem = ({ name, onClick, chosen, setChosen }) => {
  const onPress = () => {
    setChosen(name);
    onClick();
  }
  return (
    <div>
      <button onClick={onPress} className={`text-black font-mono w-full py-2 px-4 mb-1 rounded hover:text-white hover:bg-[#014f36] ${chosen === name ? 'text-white bg-[#014f36]' : '' }`}>{name}</button>
    </div>
  )
}

const OptionDrawer = () => {
  const { user, firebaseSignOut } = useUserAuth();
  const [ chosen, setChosen ] = useState("My Profile")
  const router = useRouter();
  return (
    <div className="bg-white ml-5 w-[300px] h-[700px] rounded-lg mt-5">
          <div>
            <div className="flex flex-row justify-center items-center my-10">
              <img src={user ? user.photoURL : null} className="w-16 h-16 rounded-full"/>
              <div className="justify-center items-center ml-10">
                <p className="text-black">Account NO.</p>
                <p className="text-black">123</p>
              </div>
            </div>
            <ListItem name="My Profile" chosen={chosen} setChosen={setChosen} onClick={() => {}}/>
            <ListItem name="My Order" chosen={chosen} setChosen={setChosen} onClick={() => {}} />
            <ListItem name="Notification" chosen={chosen} setChosen={setChosen} onClick={() => {}}/>
            <ListItem name="Address Book" chosen={chosen} setChosen={setChosen} onClick={() => {}}/>
            <ListItem name="I&I Rewards" chosen={chosen} setChosen={setChosen} onClick={() => {}}/>
            <ListItem name="Friends Referral" chosen={chosen} setChosen={setChosen} onClick={() => {}}/>
            <ListItem name="My Favourites" chosen={chosen} setChosen={setChosen} onClick={() => {}}/>
            <ListItem name="My Coupons" chosen={chosen} setChosen={setChosen} onClick={() => {}}/>
            <ListItem name="Viewed History" chosen={chosen} setChosen={setChosen} onClick={() => {}}/>
            <ListItem name="Returns & Refunds" chosen={chosen} setChosen={setChosen} onClick={() => {}}/>
            <ListItem name="My Comments" chosen={chosen} setChosen={setChosen} onClick={() => {}}/>
            <ListItem name="Sign Out" chosen={chosen} setChosen={setChosen} onClick={() => {
              firebaseSignOut();
              router.push('/');
            }}/>

          </div>
        </div>
  )
}


export default function Page() {
  const { user } = useUserAuth();
  return (
    user ? 
    <main>
      <TopMenu/>
      <div className="flex flex-row bg-gray-200 justify-center">
        <OptionDrawer/>
        <div className="ml-5 bg-white w-[60%] h-[700px] rounded-lg mt-5">
           <div>

           </div>
        </div>
      </div>
    </main>
    :
    <></>
  );
}
