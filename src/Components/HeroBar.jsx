import React from 'react';
import image from "../Assets/flo.png"


const HeroBar = () => {
  return (
    <>
      <div className= " container max-w-x flex-row flex px-10 top-10 " >
       
        <div className=' flex-col justify-start mt-20'>

      <h1 className='  top-10 text-2xl font-semibold text-gray-900  rounded-md leading-normal'>FRESH FLOWERS</h1>
          
          <h1 className='  text-2xl font-bold text-gray-900 leading-normal '> <span className=' text-3xl font-bold text-green-600'>Nature </span> & Beautiful 
          <span className=' text-3xl font-bold text-green-600'> Flowers</span> </h1>
            
          <h1 className=' mt-2 text-2xl font-semibold text-green-600 '>Send Beautiful <span className=''> Flowers</span> Today</h1>
            <p className=' mb-20 mt-2 text-xl font-norml text-gray-900'>  
            Brighter Someone’s day with our stunning flowers arrangments.</p>
            <button class=" text-gray-300 bg-gray-900 rounded-3xl py-3 px-8 font-medium hover:bg-transparent hover:border-gray-900 duration-300 hover:text-gray-900 hover:border border-transparent">Contact Now</button>


            
        </div>
        {/* <div className=' flex-col flex justify-end items-center mt-10'>
          <img src={image} className=' my-10xl:w-20 xl:h-25 '/>
        {/* <img src={image} alt='img' className=' w-full my-10  xl:w-1/3 xl:absolute  top-[-40%] right-0' />  
        </div>  */}
          

      
      </div>
    </>
  )
}

export default HeroBar;