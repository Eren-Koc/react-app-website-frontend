import React from 'react'
import DesignFooterImg from '../images/design-footer-img.png';

const DesignFooter = () => {
  return (
    <div className='w-full py-16 h-fit flex 960px:flex-row flex-col justify-evenly items-center px-4'>
        <div className='960px:pr-6'>
            <img src={DesignFooterImg} className='w-96 h-auto' alt="" />
        </div>
        <div className='flex flex-col'>
            <span className='text-36px font-bold text-app-dark 960px:flex 960px:flex-col block 960px:mt-0 mt-4'>How to design your site footer like <span>we did</span></span>
            <span className='text-base font-medium text-app-neutral-gray max-w-[700px] mt-4'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</span>
            <button className=' bg-app-light-green text-app-white px-8 py-[14px] w-fit h-fit text-base font-medium rounded-md mt-10'>Learn More</button>
        </div>
    </div>
  )
}

export default DesignFooter