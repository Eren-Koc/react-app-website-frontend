import React from 'react'
import { GoPeople } from 'react-icons/go';
import { HiOutlineCreditCard } from 'react-icons/hi';
import Clubs from '../images/clubs.svg';
import Finger from '../images/finger.svg';
const HelpingBusinessReinvent = () => {
  return (
    <div className='helping-business-reivent-container bg-app-light-gray py-16 1100px:flex-row flex-col  h-fit flex w-full justify-evenly items-center'>
    <div className='1100px:px-0 px-4'>
        <span className='text-36px font-bold text-app-dark flex flex-col'>Helping a local <span className='text-app-light-green'>business reinvent itself</span></span>
        <span className='text-app-gray-900 font-medium text-base mt-6'>We reached here with our hard work and dedication</span>
    </div>
    <div className='flex flex-row flex-wrap 1100px:justify-between justify-center 1100px:w-1/2 w-full items-center 1100px:max-w-[600px] 1100px:mt-0 mt-8'>

    <div className='business-reivent-card flex flex-row justify-start items-center w-[220px] m-4'>
    <GoPeople className='w-14 h-auto text-app-light-green'/>
    <div className='flex flex-col ml-4'>
    <span className='font-bold text-app-dark text-28px'>2,245,341</span>
    <span className='font-medium text-app-neutral-gray text-base'>Member</span>
    </div>
    </div>

    <div className='business-reivent-card flex flex-row justify-start items-center w-[220px] m-4'>
    <img src={Clubs}  alt="" />
    <div className='flex flex-col ml-4'>
    <span className='font-bold text-app-dark text-28px'>46,328</span>
    <span className='font-medium text-app-neutral-gray text-base'>Clubs</span>
    </div>
    </div>

    <div className='business-reivent-card flex flex-row justify-start items-center w-[220px] m-4'>
    <img src={Finger}  alt="" />
    <div className='flex flex-col ml-4'>
    <span className='font-bold text-app-dark text-28px'>828,867</span>
    <span className='font-medium text-app-neutral-gray text-base'>Event Booking</span>
    </div>
    </div>

    <div className='business-reivent-card flex flex-row justify-start items-center w-[220px] m-4'>
    <HiOutlineCreditCard className='w-14 h-auto text-app-light-green'/>
    <div className='flex flex-col ml-4'>
    <span className='font-bold text-app-dark text-28px'>1,926,436</span>
    <span className='font-medium text-app-neutral-gray text-base'>Payments</span>
    </div>
    </div>

    </div>
    </div>
  )
}

export default HelpingBusinessReinvent