import React from 'react'
import Clients1 from '../images/clients1.svg';
import Clients2 from '../images/clients2.svg';
import Clients3 from '../images/clients3.svg';
import Clients4 from '../images/clients4.svg';
import Clients5 from '../images/clients5.svg';
import Clients6 from '../images/clients6.svg';
import Clients7 from '../images/clients7.svg';
const OurClients = () => {
  return (
    <div className='our-clients-container flex flex-col px-4  py-2 mt-16 w-full h-fit text-center'>
    <span className='text-36px font-bold text-app-dark'>Our Clients</span>
    <span className='text-base font-medium mt-2 text-app-neutral-gray'>We have been working with some Fortune 500+ clients</span>
    <div className='clients-images flex flex-row flex-wrap justify-evenly mt-10 py-4 w-full'>
        <img src={Clients1} className='w-8 h-auto max-640px:m-4' alt="" />
        <img src={Clients2} className='w-10 h-auto max-640px:m-4' alt="" />
        <img src={Clients3} className='w-10 h-auto max-640px:m-4' alt="" />
        <img src={Clients4} className='w-10 h-auto max-640px:m-4' alt="" />
        <img src={Clients5} className='w-10 h-auto max-640px:m-4' alt="" />
        <img src={Clients6} className='w-10 h-auto max-640px:m-4' alt="" />
        <img src={Clients7} className='w-10 h-auto max-640px:m-4' alt="" />
    </div>
    </div>
  )
}

export default OurClients