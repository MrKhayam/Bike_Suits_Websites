import React from 'react'

const Card = ({imgSrc,price,chez}) => {
  return (
    <>
      <div className="w-[90%] rounded-md border-[#0096bb] border h-auto flex flex-col items-center">
        <img className='rounded-t-md' src={imgSrc} alt="" />
        <div className='w-full h-10 bg-gradient-to-r from-[#00617a] via-[#0096bb] to-[#00617a] flex items-center justify-center text-center'>
            <h1 className='text-white text-md font-semibold'>Cowhead Leather {chez} €{price}</h1>
        </div>
      </div>
    </>
  )
}

export default Card
