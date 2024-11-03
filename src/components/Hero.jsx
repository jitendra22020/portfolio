import React from 'react'
import { BsDownload } from 'react-icons/bs'
import cv from "../assets/cv.pdf"
import DSC_0044 from "../assets/DSC_0044.png"

const Hero = () => {
  return (
    <div className='text-black flex flex-col-reverse md:flex-row justify-center items-center py-10 px-5 sm-px-10 lg:px-40 bg-gradient-to-t from-white to-yellow-50'>
      <div className='w-full md:w-1/2 md-10 text-center md:text-left' >
        <h3 className='text-base md:text-lg lg:text-xl mb-0 md:-mb-2 text-yellow-500'>Hello, I am</h3>
        <h1 className='text-2xl md:text-4xl lg:text-6xl mb-0 md:-ml-1 font-bold'>Jitendra</h1>
        <h3 className='text-base md:text-x1 lg:text-2xl text-green-600'>Web developer</h3>
        <p className='text-sm md:text-lg lg:text-xl tracking-tighter'>
            Lorem ipsum dolor sit amet consectetur adipisicing Illo, debitis commodi ab error modi quia deleniti ullam consequatur a voluptatem quibusdam natus. Sed dolorem dolorum, beatae aspernatur asperiores aut atque.
        </p>
        <div className='flex items-center justify-center md:justify-start gap-4 mt-5' >
            <button className='bg-yellow-500 px-10 py-1 rounded-lg mr-4 hover:bg-yellow-400 duration-200'>Hire me</button>
            <a className='flex items-center text-yellow-500 font-semibold' href={cv} download="cv.pdf">
            <button>
                Download cv <BsDownload className='ml-2 text-lg'/>
            </button>
            </a>
        </div>
      </div>
      <div>
        <img src={DSC_0044} alt='image'/>
      </div>
    </div>
  )
}

export default Hero
