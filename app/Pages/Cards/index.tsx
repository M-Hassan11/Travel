import React from 'react'

import FirstCard from "@/app/Components/assets/Images/FirstCard.jpg";
import SecondCard from "@/app/Components/assets/Images/SecondCard.jpg";
import ThirdCard from "@/app/Components/assets/Images/ThrdCard.jpg";

import Image from 'next/image';

const CardSec = () => {
  return (
    <div className='pt-40'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 - Image */}
          <div className="rounded flex flex-col  p-4">
            <Image src={FirstCard} alt="Centered Image" className="mb-4 max-h-60 w-auto"/>
            <h1 className="text-4xl pl-2 font-serif">Travel To Your Dream</h1>
            <p className='pl-2'>The Foundation of our company was built upon live events and staging services Fantazias team of audio visual professionals has decades of creativity and experience to provide you with the very best</p>
          </div>
          
          {/* Card 2 - Heading with Image */}
          <div className="rounded flex flex-col p-4">
            <Image src={SecondCard} alt="Description 2" className="mb-4 max-h-60 w-auto"/>
            <h1 className="text-4xl pl-2 font-serif">Travel To Your Dream</h1>
            <p className='pl-2'>The Foundation of our company was built upon live events and staging services Fantazias team of audio visual professionals has decades of creativity and experience to provide you with the very best</p>
          </div>
          
          {/* Card 3 - Paragraph with Image */}
          <div className="rounded flex flex-col p-4">
            <Image src={ThirdCard} alt="Description 3" className="mb-[15px] max-h-[196px] w-auto"/>
            <h1 className="text-4xl pl-2 font-serif">Travel To Your Dream</h1>
            <p className='pl-2'>The Foundation of our company was built upon live events and staging services Fantazias team of audio visual professionals has decades of creativity and experience to provide you with the very best</p>
          </div>
        </div>
  </div>
  )
}

export default CardSec