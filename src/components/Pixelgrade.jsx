import React from 'react'
import PixelgradeImg from '../images/pixelgrade-img.png';
const Pixelgrade = () => {
  return (
    <div className='pixelgrade-container w-full py-24 px-4 justify-evenly items-center flex 960px:flex-row flex-col'>
        <div>
            <img src={PixelgradeImg} className='w-96 h-auto' alt="" />
        </div>
        <div className='flex flex-col h-fit'>
            <span className='text-36px text-app-dark font-bold 960px:mt-0 mt-5 960px:flex 960px:flex-col block'>The unseen of spending three <span> years at Pixelgrade</span></span>
            
            <span className='text-base text-app-neutral-gray mt-6  max-w-[700px] block'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </span>
            <button className=' bg-app-light-green text-app-white px-8 py-[14px] w-fit h-fit text-base font-medium rounded-md mt-8'>Learn More</button>
        </div>
    </div>
  )
}

export default Pixelgrade