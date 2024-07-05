import React from 'react'
import Card from './Card'

const Jackets = () => {
  return (
    <div className='w-[95%] m-auto flex flex-col items-center gap-8'>
        <Card imgSrc={'/jack1.jpg'} price={'250'} />
        <Card imgSrc={'/jack2.jpg'} price={'250'} />
        <Card imgSrc={'/jack3.jpg'} price={'250'} />
        <Card imgSrc={'/jack4.jpg'} price={'250'} />
    </div>
  )
}

export default Jackets
