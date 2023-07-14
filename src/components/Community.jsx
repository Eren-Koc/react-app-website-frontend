import React from 'react'
import Membershipicon from '../images/membership-icon.svg';
import Nationalicon from '../images/national-icon.svg';
import ClubandGroupsicon from '../images/clubandgroups-icon.svg';
const Community = () => {
  return (
    <div className='commuinty-container w-full flex-col flex h-fit mt-20 px-4 py-2 text-center'>
        <span className='font-bold text-36px text-app-dark'>Manage your entire community</span>
        <span className='font-bold text-36px text-app-dark'>in a single system</span>
        <span className='font-medium text-base text-app-neutral-gray mt-2'>Who is Nextcent suitable for?</span>
        <div className='w-full flex flex-row flex-wrap justify-evenly items-center h-fit mt-12'>

        <div className="community-cards my-4 px-6 py-4 shadow-sm rounded-md w-[350px] flex flex-col justify-center items-center h-fit">
            <div className='card-icon w-16 h-16 relative'>
            <img src={Membershipicon} className='w-12 z-10 absolute h-auto' alt="" />
            <div className='absolute z-0 w-12 h-12 right-0 top-2 bg-app-oppacity-green rounded-md rounded-br-[50%]'></div>
            </div>
            <span className='mt-3 font-bold text-28px text-app-dark'>Membership</span>
            <span className='font-bold text-28px text-app-dark'>Organisations</span>
            <span className='mt-6 text-base font-medium text-app-neutral-gray'>Our membership management software provides full automation of membership renewals and payments</span>
        </div>

        <div className="community-cards  my-4 px-6 py-4 shadow-sm rounded-md w-[350px] flex flex-col justify-center items-center h-fit">
            <div className='card-icon w-16 h-16 relative'>
            <img src={Nationalicon} className='w-12 z-10 absolute h-auto' alt="" />
            <div className='absolute z-0 w-12 h-12 right-0 top-2 bg-app-oppacity-green rounded-md rounded-br-[50%]'></div>
            </div>
            <span className='mt-3 font-bold text-28px text-app-dark'>National</span>
            <span className='font-bold text-28px text-app-dark'>Associations</span>
            <span className='mt-6 text-base font-medium text-app-neutral-gray'>Our membership management software provides full automation of membership renewals and payments</span>
        </div>

        <div className="community-cards  my-4 px-6 py-4 shadow-sm rounded-md w-[350px] flex flex-col justify-center items-center h-fit">
            <div className='card-icon w-16 h-16 relative'>
            <img src={ClubandGroupsicon} className='w-12 z-10 absolute h-auto' alt="" />
            <div className='absolute z-0 w-12 h-12 right-0 top-2 bg-app-oppacity-green rounded-md rounded-br-[50%]'></div>
            </div>
            <span className='mt-3 font-bold text-28px text-app-dark'>Clubs And</span>
            <span className='font-bold text-28px text-app-dark'>Groups</span>
            <span className='mt-6 text-base font-medium text-app-neutral-gray'>Our membership management software provides full automation of membership renewals and payments</span>
        </div>
       
        </div>
    </div>
  )
}

export default Community