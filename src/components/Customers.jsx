import React from 'react'
import CustomersImg from '../images/customers-img.png';

import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

import Clients1 from '../images/clients1.svg';
import Clients2 from '../images/clients2.svg';
import Clients3 from '../images/clients3.svg';
import Clients4 from '../images/clients4.svg';
import Clients5 from '../images/clients5.svg';
import Clients6 from '../images/clients6.svg';


const Customers = () => {
  return (
    <div className='w-full h-fit py-16 px-4 flex 960px:justify-evenly justify-center 960px:flex-row flex-col items-center bg-app-light-gray'>
        <div>
<img src={CustomersImg} className='960px:min-w-[384px] w-96 960px:object-contain h-auto' alt="" />
        </div>
        <div className='flex flex-col'>
            <span className='text-base font-medium text-app-neutral-gray max-w-[1000px]'>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
            </span>
            <span className='text-app-light-green mt-4 font-bold text-xl 960px:text-left text-center'>Tim Smith</span>
            <span className='mt-4  font-medium text-base text-app-neutral-gray-light 960px:text-left text-center'>British Dragon Boat Racing Association</span>
            <div className='flex-row flex-wrap flex 960px:justify-start justify-center items-center mt-8'>
                <img src={Clients1} className='xl:mr-4 mr-2 my-4 w-10 h-auto' alt="" />
                <img src={Clients2} className='xl:mx-4 mx-2 my-4 w-10 h-auto' alt="" />
                <img src={Clients3} className='xl:mx-4 mx-2 my-4 w-10 h-auto' alt="" />
                <img src={Clients4} className='xl:mx-4 mx-2 my-4 w-10 h-auto' alt="" />
                <img src={Clients5} className='xl:mx-4 mx-2 my-4 w-10 h-auto' alt="" />
                <img src={Clients6} className='xl:ml-4 ml-2 my-4 w-10 h-auto' alt="" />
               <a href=""><span className='text-app-light-green font-bold xl:ml-12 960px:ml-4 m-4 text-xl flex flex-row justify-center items-center'>Meet All Customers <HiOutlineArrowNarrowRight className='ml-2 w-12 h-6 text-app-light-green'/></span></a>
            </div>
        </div>
    </div>
  )
}

export default Customers