import React from 'react'
import Card from './Card'

const Boots = () => {
  return (
    <div className='w-[95%] m-auto flex flex-col items-center gap-8'>
        <Card imgSrc={'/bot1.jpg'} price={'170'} />
        <Card imgSrc={'/bot2.jpg'} price={'170'} />
        <Card imgSrc={'/bot3.jpg'} price={'170'} />
        <Card imgSrc={'/bot1.jpg'} price={'170'} />
    </div>
  )
}

export default Boots
