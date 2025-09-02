import React from 'react'

const FacultyComponent = ({heading , content , image}) => {
  return (
    <div className='flex flex-col flex-grow'>
        <span className=' pb-4 font-inter font-bold text-[22px] text-[#000000]'>{heading}</span>
        <span className='pb-[42px] font-inter font-normal text-sm text-[#000000CC] text-justify'>{content}</span>
        <div className='flex-grow h-[248px] bg-[#D9D9D9]'></div>
    </div>
  )
}

export default FacultyComponent