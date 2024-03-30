import Image from 'next/image'
import SecondSecPht from "@/app/Components/assets/Images/Secondsec.jpg";
import React from 'react'


const SecondSec = () => {
  return (
    <div className='pt-32'>
      <div className='relative flex items-center justify-center text-center'>
        <div className=''>
          <Image src={SecondSecPht} alt='/' className=' h-72 rounded-md ' />
        </div>
        <div className='absolute inset-0 flex flex-col items-center justify-center'>
          <div className="absolute inset-0 bg-black opacity-60 "></div>
          <div className="z-10 max-w-md text-white">
          <h1 className="md:text-4xl font-bold mb-2">Create a memory to remember</h1>
          <p className='p-2'>
          The Foundation of our company was built upon live events and staging services Fantazias team of audio visual professionals has decades of creativity and experience to provide you with the very best
          </p>
          </div>
            <div className='pt-2 z-10 '>
          <button className='p-2 font-serif rounded-sm border-2 border-white text-white '>
            My Travels logs
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondSec
