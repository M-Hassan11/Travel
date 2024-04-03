import React from 'react'
import { MdFlight } from "react-icons/md";


const Flight = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center text-center'>
        <div className=''>
                <MdFlight size={80}  className='mx-auto' />
            <div className='' >
                <p className='font-bold font-serif text-3xl md:text-6xl max-w-xl '>
                    See place you have n͟e͟v͟e͟r͟ been before
                </p>
            </div>
            <p className='mt-12 text-sm md:text-3xl'>
                Travel | To Your Dream | Destination 
            </p>
        </div>
    </div>
  )
}

export default Flight