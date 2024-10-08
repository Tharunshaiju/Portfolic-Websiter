import React from 'react'
import AboutImg from '../assets/about.png'

const About = () => {
  return (
    <section id='about' className='flex flex-col md:flex-row bg-secondary px-5'>
    <div className='md:w-1/2'>
        <img src={AboutImg } />
    </div>
    <div className='md:w-1/2 flex justify-center'>
    <div className=' flex flex-col justify-center text-white'>
        <h1 className='text-4xl text-white border-b-2 mb-5 w-[170px] font-bold '>About Me</h1>
        <p className='pb-5'>Hi, My name is Tharun.I am a Front End Developer.I built beautiful Website</p>
        <p className='pb-5'>I am a junior level Front-end Developer skills like React.js,JavaScript,HTML,CSS,and Tailwind</p>
        </div>
    </div>
    </section>
  )
}

export default About
