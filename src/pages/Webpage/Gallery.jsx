import React from 'react'

const Gallery = () => {
  return (
    <div>
        <div className='flex flex-col gap-8 pb-[54px]'>
            <div className='flex items-center justify-between pl-[73px] pr-[89px]'>
                <div className='flex flex-col justify-center items-start max-w-[607px] gap-4'>
                    <span className='font-inter font-bold text-[#000000] text-[22px]'>Driving Change, Leading the Charge</span>
                    <span className='font-inter font-normal text-sm text-[#000000CC]'>Our leadership team is dedicated to creating opportunities, fostering growth, and inspiring the next generation of tech leaders. These are the changemakers who guide ACM St. Joseph’s Chapter toward success and innovation.</span>
                </div>
                <button className=''>Get to Know More</button>
            </div>
            <div className='flex items-center justify-center gap-4 pl-[61px] pr-[62px]'>
                <div className='flex-grow h-[680px] bg-[#D9D9D9] rounded-xl'></div>
                <div className='flex flex-col justify-start items-center gap-4'>
                    <div className='w-[306px] h-[216px] rounded-xl bg-[#D9D9D9]'></div>
                    <div className='w-[306px] h-[216px] rounded-xl bg-[#D9D9D9]'></div>
                    <div className='w-[306px] h-[216px] rounded-xl bg-[#D9D9D9]'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery