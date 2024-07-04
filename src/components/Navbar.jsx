import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";


const Navbar = () => {
  return (
    <>
      <div className="w-[90%] z-10 rounded-lg h-auto fixed left-1/2 transform -translate-x-1/2 p-4 bg-gradient-to-r from-[#474747e7] via-[#fff] to-[#474747e7] flex justify-between items-center">
      <div className="left">
      <div className="logo">
        <img className='w-[10%]' src="/logo.png" alt="" />
      </div>
      </div>
      <div className="right text-white">
      <FaBarsStaggered size={23} cursor={'pointer'} />


      </div>
      </div>
    </>
  )
}

export default Navbar