import Image from 'next/image'
import React from 'react'
import HomePageImgs from "@/app/Components/assets/Images/HomePagePic.jpg";

const HomePage = () => {
  return (
    <div className='md:pt-28 pt-20 flex flex-col md:flex-row p-4 '>
        <div className='md:w-1/2 text-center justify-center'>
            <h1 className='md:text-6xl text-4xl font-serif'>Travel to your destination</h1>
            <div className='p-4'>
            <p className='text-left md:text-md text-sm '>
            The Foundation of our company was built upon live events and staging services fantazaias team of audio,visual professionals has decades of creativity and experience to provide you with the very
            </p>
            </div>
            
            <div className='p-4' >
              <button className='bg-black text-white p-2 rounded-md font-semibold '>
                Reserve Ticket
              </button>
              </div>
        </div>
        <div className='md:w-1/2 items-center justify-center'>
            <Image src={HomePageImgs} alt='' className='w-full rounded-md ' priority={true} width={500} height={500} />
        </div>
    </div>
  )
}

export default HomePage