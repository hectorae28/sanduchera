import React from 'react'

const Titles = ({type,children,style}) => {
  return (
    <div className='text-center w-full mb-5'>{
      type==="h1" 
      ? <h1 className={'text-3xl font-bold font-sans '+style}>{children}</h1> 
      : (type==="h2" ? <h2 className={'text-2xl font-bold font-sans '+style}>{children}</h2> 
        : <h3 className={'text-xl font-bold font-sans '+style}>{children}</h3>)
    }
      <div className='py-3 text-center flex justify-center'>
        <p className='w-1/6 h-px border-lime-500 border-solid border-[1px]'></p>
      </div>
    </div>
  )
}

export default Titles