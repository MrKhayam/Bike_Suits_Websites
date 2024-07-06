import React, { useRef } from 'react'

const MainCont = () => {
  
  return (
    <>
      <div className="mt-28 w-[95%] m-auto h-auto p-3 flex items-center flex-col gap-4">
        <h1 className="puchline text-md w- font-semibold text-center text-white">Gear up for the ride of your life with our premium bike suits ultimate style, safety, and comfort for every rider!</h1>
        <div className="image mt-6  rounded-2xl">
            <img src="/change.jpg" className='rounded-2xl border-t-2 border-[#0096bb]' alt="" />
        </div>
        <div className="btn mt-6 text-white">
            <button className='bg-gradient-to-br from-[#00617a] via-[#0096bb] to-[#00617a] px-12 py-3 text-white text-lg font-semibold rounded-lg'>View Categories</button>
        </div>
      </div>
    </>
  )
}

export default MainCont
