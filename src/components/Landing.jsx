import React from 'react'
import Header from './Header'
import landingImg from '../images/landing-img.png';
const Landing = () => {
  return (
    <div className='landing w-full min-h-screen h-fit bg-app-light-gray'>
      <Header/>
      
    <div className='lessons-inside w-full 960px:flex-row flex-col-reverse absolute top-20 h-[calc(100vh-80px)] px-3 flex justify-evenly items-center'>
      
      <div className='flex w-fit h-fit flex-col max-640px:px-2'>
        <span className='1100px:text-64px sm:text-48px text-36px font-bold text-app-dark'>Lessons and insights</span>
        <span className='1100px:text-64px sm:text-48px text-36px font-bold text-app-light-green'>from 8 years</span>
        <span className=' sm:text-base text-14px font-medium text-app-neutral-gray mt-4 1100px:w-full max-960px:w-full w-4/5 h-fit'>Where to grow your business as a photographer: site or social media?</span>
        <button className=' bg-app-light-green text-app-white px-8 py-[14px] w-fit h-fit text-base font-medium rounded-md mt-8'>Register</button>
        
        
      </div>

      <div className=''>
        <img src={landingImg} className='w-96 h-auto' alt="" />
      </div>
    </div>
    </div>
  )
}

export default Landing