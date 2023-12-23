import React from 'react';
import { CgMenuGridO } from "react-icons/cg";
import logo from "../Assets/FLOWERY.COM.png"

const Navbr = () => {
  return (
    <div>

      <nav className =  " container flex items-center px-8 pt-4 ">
        <img src={logo} alt="logo" className=' w-20 rounded-full'/>
        <h1 className=' text-pink-600 font-bold text-[1.2rem] uppercase ml-2'>Flowery.com</h1>
        <ul className = "hidden flex-1 md:block text-center text-[1.5rem] ">
                
          <li className='list-none inline-block px-5'><a href='#home'  className=" no-underline text-gray-900 px-2 hover:border-b-2 border-green-600 hover:text-green-600 " > Home </a></li>
          <li className=' list-none inline-block px-5'><a href='#About'  className=" no-underline text-gray-900 px-2 hover:border-b-2 border-green-600  hover:text-green-600 ">About</a></li>
          <li className=' list-none inline-block px-5' ><a href='#Service'  className=" no-underline text-gray-900 px-2 hover:border-b-2 border-green-600  hover:text-green-600">Service</a></li>
          <li className=' list-none inline-block px-5'><a href='#Review'  className=" no-underline text-gray-900 px-2 hover:border-b-2 border-green-600  hover:text-green-600">Review</a></li>
          </ul>
                <button class=" hidden md:block text-gray-300 bg-gray-900 rounded-3xl py-3 px-8 font-medium hover:bg-transparent hover:border-gray-900 duration-300 hover:text-gray-900 hover:border border-transparent">Contacts</button>
                 <div className=' flex flex-1 md:hidden text-lg justify-end'>
                  <CgMenuGridO size={30} />

                 </div>

      </nav>



    </div>
  )
}

export default Navbr