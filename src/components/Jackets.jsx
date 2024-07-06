import React from 'react'
import Card from './Card'

const Jackets = () => {
  return (
    <div className='w-[95%] m-auto flex flex-col items-center gap-8'>
      <Card imgSrc={'/jack1.jpg'} price={'250'} chez={'Jackets'} txt={'Cowhide Leather'} />
      <Card imgSrc={'/jack2.jpg'} price={'250'} chez={'Jackets'} txt={'Cowhide Leather'} />
      <Card imgSrc={'/jack3.jpg'} price={'250'} chez={'Jackets'} txt={'Cowhide Leather'} />
      <Card imgSrc={'/pant1.jpg'} price={'200'} chez={'Pant'} txt={'Cowhide Leather'} />
    </div>
  )
}

export default Jackets