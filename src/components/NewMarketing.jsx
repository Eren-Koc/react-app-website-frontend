import React from 'react'
import Cards1Img from '../images/new-marketing-cards-1.png';
import Cards2Img from '../images/new-marketing-cards-2.png';
import Cards3Img from '../images/new-marketing-cards-3.png';

import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
const NewMarketing = () => {
  return (
    <div className='new-marketing-container w-full py-16 px-4 flex flex-col justify-center items-center'>
    <span className='text-36px text-app-dark font-bold'>Caring is the new marketing</span>
    <span className='text-base text-app-neutral-gray font-medium max-w-[700px] mt-4 text-center'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</span>
    <div className='flex flex-row flex-wrap justify-evenly items-center'>

    <div className='new-marketing-cards mx-4 my-12 relative'>
        <img src={Cards1Img} className='relative' alt="" />
        <div className='rounded-xl absolute bottom-[-20%] w-[90%] left-[5%] p-4 flex flex-col bg-app-light-gray shadow-md sm:h-44 h-36 text-center'>
            <span className='font-bold sm:text-xl text-base text-app-neutral-gray'>Creating Streamlined Safeguarding Processes with OneRen</span>
            <div className='w-full flex justify-center items-center h-fit left-0  absolute bottom-[10%] text-center'>
          <a href=""><span className='font-bold sm:text-xl text-base mt-4 text-app-light-green flex flex-row'>Readmore <HiOutlineArrowNarrowRight className='ml-3 w-6 h-auto text-app-light-green'/></span></a>
          </div>
        </div>
    </div>

    <div className='new-marketing-cards mx-4 my-12 relative'>
        <img src={Cards2Img} className='relative' alt="" />
        <div className='rounded-xl absolute bottom-[-20%] w-[94%] left-[3%] p-4 flex flex-col bg-app-light-gray shadow-md h-44 text-center'>
            <span className='font-bold sm:text-xl text-base text-app-neutral-gray'>What are your safeguarding responsibilities and how can you manage them?</span>
            <div className='w-full flex justify-center items-center h-fit left-0  absolute bottom-[10%] text-center'>
          <a href=""><span className='font-bold sm:text-xl text-base mt-4 text-app-light-green flex flex-row'>Readmore <HiOutlineArrowNarrowRight className='ml-3 w-6 h-auto text-app-light-green'/></span></a>
          </div>
        </div>
    </div>

    <div className='new-marketing-cards mx-4 my-12 relative'>
        <img src={Cards3Img} className='relative' alt="" />
        <div className='rounded-xl absolute bottom-[-20%] w-[90%] left-[5%] p-4 flex flex-col bg-app-light-gray shadow-md h-44 text-center'>
            <span className='font-bold sm:text-xl text-base text-app-neutral-gray'>Revamping the Membership Model with Triathlon Australia</span>
         
         <div className='w-full flex justify-center items-center h-fit absolute left-0 bottom-[10%] text-center'>
          <a href=""><span className='font-bold sm:text-xl text-base mt-4 text-app-light-green flex flex-row'>Readmore <HiOutlineArrowNarrowRight className='ml-3 w-6 h-auto text-app-light-green'/></span></a>
          </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default NewMarketing