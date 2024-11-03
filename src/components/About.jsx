import React from 'react'
import DSC_0044 from "../assets/DSC_0044.png"
import cv from "../assets/cv.pdf"
import {FaRegHandshake, FaRegFolderOpen} from "react-icons/fa"
import { MdSupportAgent } from 'react-icons/md'
import { BsDownload } from 'react-icons/bs'

function About() {
  return (
    <div id='about' className='py-16 bg-gray-50 '>
      <div className='container mx-auto px-6 lg:px-14 flex flex-col md:flex-row items-center justify-between '>
        <div className='w-52 md:w-72 mb-8 md:mb-0 ml-0 md:ml-30'>
          <img src={DSC_0044} alt='aboutme' className='w-full h-auto object-cover'/>
        </div>

        <div className='px-5 w-full md:w-1/2 md:pl-12'>
          <h3 className='text-yellow-500 font-semibold text-lg uppercase mb-4'>A Bit</h3>
          <h2 className='text-4xl md:text-6xl font-bold text-gray-800 mb-6'>About me</h2>
          <p className='text-gray-600 mb-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, excepturi asperiores. Est rem quidem voluptatibus ipsum aspernatur. Nobis explicabo autem at facere doloribus atque voluptatibus impedit, alias, quas neque eos.</p>

          <div className='flex flex-wrap mb-6'>
            <div className='flex items-center w-1/2 mb-4 '>
              <FaRegHandshake className='text-yellow-500 text-5xl mr-4'/>
              <div>
                <h4 className='text-gray-700 font-semibold'>Fresher</h4>
                <p className='text-gray-700'>With strong technical skills</p>
              </div>
            </div>
          </div>
          <div className='fle items-center '>
            <button className='bg-yellow-500 px-8 py-3 rounded-lg mr-4 hover:bg-yellow-400'>Hire me</button>
            <a className='flex items-center text-yellow-500 font-semibold' href={cv} download="cv.pdf">Download CV <BsDownload className='ml-2 text-lg'/></a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About