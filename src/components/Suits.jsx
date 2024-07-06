import React from 'react'
import Card from './Card'

const Suits = () => {
  return (
    <div className='w-[95%] m-auto flex flex-col items-center gap-8'>
        <Card imgSrc={'/main1.jpg'} price={'500'} chez={'Suit'} />
        <Card imgSrc={'/main2.jpg'} price={'450'} chez={'Suit'} />
        <Card imgSrc={'/main3.jpg'} price={'480'} chez={'Suit'} />
        <Card imgSrc={'/main4.jpg'} price={'480'} chez={'Suit'} />
    </div>
  )
}

export default Suits
