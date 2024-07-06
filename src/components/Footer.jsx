import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="w-[95%] h-auto flex flex-col mt-14 items-center justify-center p-5 rounded-t-3xl gap-3 bg-gradient-to-b from-[#0096bb] m-auto via-[#00546a] to-[#000]">
        <img className='w-[30%] bg-white px-2 rounded-full' src="/logo.png" alt="" />
        <h1 className='text-white text-lg'>Whisper Willow Sports</h1>
        <p className='text-center text-white text-[10px]'>Acceptable Use | Privacy Policy | Terms & Conditions</p>
        <p className='text-center text-white text-[10px]'>This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.</p>
        <p className='text-center text-gray-400 text-[10px]'>©2024 whisper-willow-sports. All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer
