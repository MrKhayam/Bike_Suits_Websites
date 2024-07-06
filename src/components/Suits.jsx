import React from 'react'
import Card from './Card'

const Suits = () => {
  return (
    <div className='w-[95%] m-auto flex flex-col items-center gap-8'>
<<<<<<< HEAD
        <Card imgSrc={'/main1.jpg'} txt={'Kangroo Leather'} price={'500'} />
        <Card imgSrc={'/main2.jpg'} txt={'Cowhide Leather'} price={'450'} />
        <Card imgSrc={'/main3.jpg'} txt={'Cowhide Leather'} price={'480'} />
        <Card imgSrc={'/main4.jpg'} txt={'Cowhide Leather'} price={'480'} />
=======
        <Card imgSrc={'/main1.jpg'} price={'500'} chez={'Suit'} />
        <Card imgSrc={'/main2.jpg'} price={'450'} chez={'Suit'} />
        <Card imgSrc={'/main3.jpg'} price={'480'} chez={'Suit'} />
        <Card imgSrc={'/main4.jpg'} price={'480'} chez={'Suit'} />
>>>>>>> cf644c84b912281d5eeada96c58a49e408f3d83f
    </div>
  )
}

export default Suits
