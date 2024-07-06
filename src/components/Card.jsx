import React from 'react'

<<<<<<< HEAD
const Card = ({imgSrc,price,chez,txt}) => {
=======
const Card = ({imgSrc,price,chez}) => {
>>>>>>> cf644c84b912281d5eeada96c58a49e408f3d83f
  return (
    <>
      <div className="w-[90%] rounded-md border-[#0096bb] border h-auto flex flex-col items-center">
        <img className='rounded-t-md' src={imgSrc} alt="" />
        <div className='w-full h-10 bg-gradient-to-r from-[#00617a] via-[#0096bb] to-[#00617a] flex items-center justify-center text-center'>
<<<<<<< HEAD
            <h1 className='text-white text-md font-semibold'>{txt} {chez} €{price}</h1>
=======
            <h1 className='text-white text-md font-semibold'>Cowhead Leather {chez} €{price}</h1>
>>>>>>> cf644c84b912281d5eeada96c58a49e408f3d83f
        </div>
      </div>
    </>
  )
}

export default Card