import React from 'react'
import BannerImg from '../../assets/banner.svg'

const Banner = () => {
  return (
    <div className='w-full'>
        <img src={BannerImg} alt="banner" className='w-full object-cover' />
    </div>
  )
}

export default Banner