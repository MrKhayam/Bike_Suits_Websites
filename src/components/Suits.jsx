import React from 'react'
import Card from './Card'

const Suits = () => {
  return (
    <div className='w-[95%] m-auto flex flex-col items-center gap-8'>
        <Card imgSrc={'/main1.jpg'} txt={'Kangroo Leather'} price={'500'} />
        <Card imgSrc={'/main2.jpg'} txt={'Cowhide Leather'} price={'450'} />
        <Card imgSrc={'/main3.jpg'} txt={'Cowhide Leather'} price={'480'} />
        <Card imgSrc={'/main4.jpg'} txt={'Cowhide Leather'} price={'480'} />
    </div>
  )
}

export default Suits
