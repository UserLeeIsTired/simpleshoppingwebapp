"use client"
import React from 'react'
import { useUserAuth } from '@/_utils/auth-context'

const NotLogin = () => {
  const { gitHubSignIn } = useUserAuth();
  return (
    <div className='flex flex-col h-full bg-white justify-center items-center'>
      <img src='./images/bun.png'/>
      <div className="flex">
        <p className="text-[#014f36] text-[18px]">Sorry,</p>
        <p className="text-black text-[18px] ml-2">Your account is not logged in</p>
      </div>
      <button onClick={gitHubSignIn} className="text-[#014f36] text-[12px] underline">Please login</button>
    </div>
  )
}

export default NotLogin