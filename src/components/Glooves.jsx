import React from 'react'
import Card from './Card'

const Glooves = () => {
  return (
    <div className='w-[95%] m-auto flex flex-col items-center gap-8'>
        <Card imgSrc={'/gl1.jpg'} price={'140'} chez={'Glooves'} txt={'Cowhide Leather'} />
        <Card imgSrc={'/gl2.jpg'} price={'140'} chez={'Glooves'} txt={'Cowhide Leather'} />
        <Card imgSrc={'/gl3.jpg'} price={'140'} chez={'Glooves'} txt={'Cowhide Leather'} />
        <Card imgSrc={'/gl4.jpg'} price={'140'} chez={'Glooves'} txt={'Cowhide Leather'} />
    </div>
  )
}

export default Glooves