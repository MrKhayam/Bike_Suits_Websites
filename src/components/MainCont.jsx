import React from 'react'

const MainCont = () => {
  return (
    <>
      <div className="mt-28 w-[90%] m-auto h-auto p-3 flex items-center flex-col gap-4">
        <h1 className="puchline text-xl font-semibold text-center text-white">Gear up for the ride of your life with our premium bike suits ultimate style, safety, and comfort for every rider!</h1>
        <div className="image mt-6 rounded-2xl">
            <img src="/main1.png" className='rounded-2xl border-2 ' alt="" />
        </div>
        <div className="btn mt-6 text-white">
            <button className='bg-gradient-to-r from-[#474747e7] via-[#fff] to-[#474747e7] px-12 py-3 text-black text-lg font-semibold rounded-lg'>View Categories</button>
        </div>
      </div>
    </>
  )
}

export default MainCont