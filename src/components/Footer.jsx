import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BiLogoTwitter,BiLogoTwitch} from 'react-icons/bi';
import {BsYoutube} from 'react-icons/bs';
import SendIcon from '../images/send-icon.svg'; 

const Footer = () => {
  return (
    <footer className='w-full py-16 flex 960px:flex-row flex-col-reverse items-center justify-evenly px-4 bg-app-dark-green'>
        <div id='copyright' className='flex flex-col w-fit h-fit max-960px:mt-6'>
        <div className='logo-icon flex flex-row justify-start items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" viewBox="0 0 35 24" fill="none">
<path d="M18.7863 13.1341L13.3954 22.3669L8.00448 13.1341H18.7863ZM20.2305 12.3088H6.55444L13.3954 24L20.2305 12.3088Z" fill="#ffffff"/>
<path d="M28.1591 1.65038L33.55 10.8833H22.7681L28.1591 1.65038ZM28.1591 0L21.3181 11.6912H35L28.1591 0Z" fill="#ffffff"/>
<path d="M0 0L5.7359 10.3409L12.0038 0.259661L0 0Z" fill="#4CAF4F"/>
<path d="M13.3955 0.905762L19.4121 11.1889H7.36728L13.3955 0.905762Z" fill="#4CAF4F"/>
<path d="M20.9615 13.4341L26.9839 24H14.6526L20.7744 13.4341H20.9615Z" fill="#4CAF4F"/>
<path d="M22.2653 12.7935L28.1591 23.1978L34.1347 12.7935H22.2653Z" fill="#4CAF4F"/>
</svg>
<span className='logo-text text-28px font-extrabold text-app-white ml-4'>Nexcent</span>
</div>
<span className='font-medium text-app-light-gray text-base mt-8'>Copyright © 2020 Nexcent ltd.</span>
<span className='font-medium text-app-light-gray text-base mt-3'>All rights reserved</span>
<div className='social-medias flex flex-row mt-10'>
    
    <a href=""><div className='rounded-full w-fit h-fit p-2 bg-app-social-medias-bg mr-2'><AiOutlineInstagram className='w-7 h-auto text-app-white'/></div></a>
    <a href=""><div className='rounded-full w-fit h-fit p-2 bg-app-social-medias-bg mx-2'><BiLogoTwitch className='w-7 h-auto text-app-white'/></div></a>
    <a href=""><div className='rounded-full w-fit h-fit p-2 bg-app-social-medias-bg mx-2'><BiLogoTwitter className='w-7 h-auto text-app-white'/></div></a>
    <a href=""><div className='rounded-full w-fit h-fit p-2 bg-app-social-medias-bg ml-2'><BsYoutube className='w-7 h-auto text-app-white'/></div></a>
</div>
        </div>
        <div className='flex justify-evenly flex-row max-640px:flex-col max-640px:justify-center w-fit max-960px:w-full h-fit'>
            <div className='company xl:mx-16 1100px:mx-8 mx-4 max-640px:mx-0 max-640px:w-full max-960px:w-1/3 max-640px:my-6  flex flex-col'>
            <span className='text-app-white font-bold text-xl mb-3'>Company</span>
            <ol className='list-none'>
                <a href=""><li className='text-app-light-gray font-medium text-base my-3'>About us</li></a>
                <a href=""><li className='text-app-light-gray font-medium text-base my-3'>Blog</li></a>
                <a href=""><li className='text-app-light-gray font-medium text-base my-3'>Contact us</li></a>
                <a href=""><li className='text-app-light-gray font-medium text-base my-3'>Pricing</li></a>
                <a href=""><li className='text-app-light-gray font-medium text-base my-3'>Testimonials</li></a>
            </ol>
            </div>
            <div className='support xl:mx-16 1100px:mx-8 mx-4 max-640px:mx-0  max-640px:w-full max-960px:w-1/3 max-640px:my-6  flex flex-col'>
            <span className='text-app-white font-bold text-xl mb-3'>Support</span>
            <ol className='list-none'>
                <a href=""><li className='text-app-light-gray font-medium text-base my-3'>Help center</li></a>
                <a href=""><li className='text-app-light-gray font-medium text-base my-3'>Terms of service</li></a>
                <a href=""><li className='text-app-light-gray font-medium text-base my-3'>Legal</li></a>
                <a href=""><li className='text-app-light-gray font-medium text-base my-3'>Privacy policy</li></a>
                <a href=""><li className='text-app-light-gray font-medium text-base my-3'>Status</li></a>
            </ol>
            </div>
            <div className="send-email xl:mx-16 1100px:mx-8 mx-4 max-640px:mx-0 max-640px:w-full max-960px:w-1/3 max-640px:my-6  flex flex-col">
            <span className='text-app-white font-bold text-xl mb-3'>Stay up to date</span>
            <input className='mt-3 rounded-md p-3 bg-app-social-medias-bg text-app-white outline-none text-14px max-w-[300px] font-medium bg-no-repeat bg-[center_right_1rem]'style={{ backgroundImage: `url(${SendIcon})` }} placeholder='Your email address' type="text" />
            </div>
        </div>
    </footer>
  )
}

export default Footer