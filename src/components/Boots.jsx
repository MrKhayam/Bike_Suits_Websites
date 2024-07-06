import React from 'react'
import Card from './Card'

const Boots = () => {
  return (
    <div className='w-[95%] m-auto flex flex-col items-center gap-8'>
        <Card imgSrc={'/bot1.jpg'} price={'170'} chez={'Boots'} txt={'Cowhide Leather'} />
        <Card imgSrc={'/bot2.jpg'} price={'170'} chez={'Boots'} txt={'Cowhide Leather'} />
        <Card imgSrc={'/bot3.jpg'} price={'170'} chez={'Boots'} txt={'Cowhide Leather'} />
        <Card imgSrc={'/boot4.jpg'} price={'170'} chez={'Boots'} txt={'Cowhide Leather'} />
    </div>
  )
}

export default Boots