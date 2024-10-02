import React from 'react'
import { FaCss3, FaFigma, FaHtml5 } from 'react-icons/fa'
import { GrGithub } from 'react-icons/gr'
import { RiJavascriptFill, RiReactjsLine } from 'react-icons/ri'
import { SiCplusplus, SiGooglefonts } from 'react-icons/si'
import { TbBrandTailwind } from 'react-icons/tb'

const Technologies = () => {
  return (
    <div className='pb-24'>
        <h2 className='my-20 text-center text-4xl'>
            Technologies
        </h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </div>
            <div className='p-4'>
                <RiJavascriptFill className='text-7xl text-yellow-400'/>
            </div>
            <div className='p-4'>
                <TbBrandTailwind className='text-7xl text-cyan-400'/>
            </div>
            <div className='p-4'>
                <FaHtml5 className='text-7xl text-orange-600'/>
            </div>
            <div className='p-4'>
                <FaCss3 className='text-7xl text-blue-400'/>
            </div>
            <div className='p-4'>
                <GrGithub className='text-7xl text-gray-400'/>
            </div>
            <div className='p-4'>
                <SiCplusplus className='text-7xl text-cyan-500'/>
            </div>
            <div className='p-4'>
                <FaFigma className='text-7xl text-pink-400'/>
            </div>
            <div className='p-4'>
                <SiGooglefonts className='text-7xl text-red-400'/>
            </div>
        </div>
    </div>
  )
}

export default Technologies