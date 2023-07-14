import React,{useState} from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { BsArrowRightShort } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';



const Header = () => {

const [menu,setMenu] = useState(false);

const menuChangeState = event => {
  // 👇️ toggle visibility
  setMenu(current => !current);

};
  return (
    <header id='header-cont' className='shadow-sm bg-app-white w-full h-20 z-40 fixed flex-row top-0 left-0 flex 960px:justify-evenly justify-between 960px:px-0 px-4 items-center'>
        <div className='logo flex flex-row  justify-center items-center h-full w-fit'>
            <div className='logo-icon mr-4'>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" viewBox="0 0 35 24" fill="none">
<path d="M18.7863 13.1341L13.3954 22.3669L8.00448 13.1341H18.7863ZM20.2305 12.3088H6.55444L13.3954 24L20.2305 12.3088Z" fill="#263238"/>
<path d="M28.1591 1.65038L33.55 10.8833H22.7681L28.1591 1.65038ZM28.1591 0L21.3181 11.6912H35L28.1591 0Z" fill="#263238"/>
<path d="M0 0L5.7359 10.3409L12.0038 0.259661L0 0Z" fill="#4CAF4F"/>
<path d="M13.3955 0.905762L19.4121 11.1889H7.36728L13.3955 0.905762Z" fill="#4CAF4F"/>
<path d="M20.9615 13.4341L26.9839 24H14.6526L20.7744 13.4341H20.9615Z" fill="#4CAF4F"/>
<path d="M22.2653 12.7935L28.1591 23.1978L34.1347 12.7935H22.2653Z" fill="#4CAF4F"/>
</svg>
</div>
<span className='logo-text text-28px font-extrabold text-app-dark-green'>Nexcent</span>
        </div>

        <div className='menu w-fit h-full justify-center items-center 960px:flex hidden'>
            <ul className='list-none flex flex-row'>        
            <a href=""><li className='text-app-dark font-base mx-5 font-medium hover:text-app-light-green duration-300 ease-in-out'>Home</li></a>
            <a href=""><li className='text-app-dark font-base mx-5 font-medium hover:text-app-light-green duration-300 ease-in-out'>Service</li></a>
            <a href=""><li className='text-app-dark font-base mx-5 font-medium hover:text-app-light-green duration-300 ease-in-out'>Feature</li></a>
            <a href=""><li className='text-app-dark font-base mx-5 font-medium hover:text-app-light-green duration-300 ease-in-out'>Product</li></a>
            <a href=""><li className='text-app-dark font-base mx-5 font-medium hover:text-app-light-green duration-300 ease-in-out'>Testimonail</li></a>
            <a href=""><li className='text-app-dark font-base mx-5 font-medium hover:text-app-light-green duration-300 ease-in-out'>FAQ</li></a>
            </ul>
        </div>

        <div className='register-login w-fit h-full flex-row justify-center items-center 960px:mr-0 mr-10 sm:flex hidden'>
            <button className=' h-10 w-20 mx-2 text-app-light-green text-14px font-medium rounded-lg'>Log in</button>
            <button className='h-10 mx-2 bg-app-light-green text-app-white w-20 text-14px font-medium rounded-md'>Sing up</button>
        </div>

        <div className='mobile-menu justify-center items-center right-2 absolute 960px:hidden flex ' onClick={menuChangeState}>
<HiOutlineMenuAlt3 className='text-app-dark-green w-7 h-7 cursor-pointer '/>
</div>


<div id='menu-container-id' className='menu-container left-0 top-0 fixed z-[49] w-full h-full bg-app-full-black ' style={{display: menu ? 'block' : 'none'}}>
<div className=' px-4 menu z-50 top-0 py-4 w-full absolute h-fit bg-app-white flex flex-col items-center'>
  <div className='logo-cont w-full flex flex-row justify-between items-center'>
<div className='logo-icon mr-4 flex flex-row justify-center items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" viewBox="0 0 35 24" fill="none">
<path d="M18.7863 13.1341L13.3954 22.3669L8.00448 13.1341H18.7863ZM20.2305 12.3088H6.55444L13.3954 24L20.2305 12.3088Z" fill="#263238"/>
<path d="M28.1591 1.65038L33.55 10.8833H22.7681L28.1591 1.65038ZM28.1591 0L21.3181 11.6912H35L28.1591 0Z" fill="#263238"/>
<path d="M0 0L5.7359 10.3409L12.0038 0.259661L0 0Z" fill="#4CAF4F"/>
<path d="M13.3955 0.905762L19.4121 11.1889H7.36728L13.3955 0.905762Z" fill="#4CAF4F"/>
<path d="M20.9615 13.4341L26.9839 24H14.6526L20.7744 13.4341H20.9615Z" fill="#4CAF4F"/>
<path d="M22.2653 12.7935L28.1591 23.1978L34.1347 12.7935H22.2653Z" fill="#4CAF4F"/>
</svg>
<span className='logo-text text-28px font-extrabold text-app-dark-green ml-4'>Nexcent</span>
</div>
<div id='close-menu-id' onClick={menuChangeState} className='close-menu'><MdClose className='w-8 h-8 bg-app-dark-green rounded text-app-white'/></div>
</div>
<ol className='list-none flex flex-col justify-start w-full mt-8'>
 <a href=""><li className='group text-app-dark text-2xl font-bold my-2 flex flex-row justify-start items-center'>Home <BsArrowRightShort className='hidden group-hover:block ml-3 w-7 h-7'/></li></a>
 <a href=""><li className='group text-app-dark text-2xl font-bold my-2 flex flex-row justify-start items-center'>Service <BsArrowRightShort className='hidden group-hover:block ml-3 w-7 h-7'/></li></a>
 <a href=""><li className='group text-app-dark text-2xl font-bold my-2 flex flex-row justify-start items-center'>Feature <BsArrowRightShort className='hidden group-hover:block ml-3 w-7 h-7'/></li></a>
 <a href=""><li className='group text-app-dark text-2xl font-bold my-2 flex flex-row justify-start items-center'>Product <BsArrowRightShort className='hidden group-hover:block ml-3 w-7 h-7'/></li></a>
 <a href=""><li className='group text-app-dark text-2xl font-bold my-2 flex flex-row justify-start items-center'>Testimonail <BsArrowRightShort className='hidden group-hover:block ml-3 w-7 h-7'/></li></a>
 <a href=""><li className='group text-app-dark text-2xl font-bold my-2 flex flex-row justify-start items-center'>FAQ <BsArrowRightShort className='hidden group-hover:block ml-3 w-7 h-7'/></li></a>
</ol>
<div className='mt-12 flex-row w-full justify-start sm:hidden flex'>
 <button className=' h-10 w-fit mr-2 text-app-light-green text-base font-medium rounded-lg'>Log in</button>
<button className='h-10 mx-2 bg-app-light-green text-app-white w-20 text-base font-medium rounded-md'>Sing up</button>
</div>

</div>
    </div>
    </header>
  )
}

export default Header