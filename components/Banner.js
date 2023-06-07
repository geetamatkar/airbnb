import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image src="https://wallpaperaccess.com/full/465623.jpg" 
        layout='fill' objectFit='cover'/>

        <div className='absolute w-full text-center top-1/2'>
            <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>

            <button className='bg-white px-10 py-4 shadow-md rounded-full font-semibold my-4
            hover:shadow-xl active:scale-90 transition duration-105 bg-emerald-300'>I'm Flexible</button>
        </div>
    </div>
  )
}

export default Banner