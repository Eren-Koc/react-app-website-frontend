import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
const GetDemo = () => {
  return (
    <div className='get-demo-container w-full py-16 bg-app-light-gray flex justify-center items-center flex-col h-fit'>
        <span className='sm:text-64px phone-450:text-48px text-36px font-bold text-app-dark-green flex flex-col text-center'>Pellentesque suscipit <span> fringilla libero eu.</span></span>
        <button className=' bg-app-light-green text-app-white px-8 py-[14px] w-fit h-fit text-base font-medium rounded-md mt-10 flex flex-row justify-center items-center'>Get a Demo <HiOutlineArrowNarrowRight className='w-5 h-auto text-app-white ml-4'/></button>
    </div>
  )
}

export default GetDemo