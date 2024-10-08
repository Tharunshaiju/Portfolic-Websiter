import React from 'react'
import HeroImg from '../assets/hero.png'
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineInstagram } from "react-icons/ai";

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>

        <div className='flex flex-col w-1/2'>
        <h1 className='md:w-1/2 text-white text-4xl font-hero-font'>Hi, <br/>Im Tharun
        <p> Im a Front-End Developer</p>
        </h1>
        <div className='flex py-10'>
            <a className='pr-5 hover:text-white' href='#'><AiOutlineTwitter size={40}/></a>
            <a className='pr-5 hover:text-white' href='#'><AiOutlineFacebook size={40}/></a>
            <a className=' hover:text-white' href='#'><AiOutlineInstagram size={40}/></a>
        </div>

        </div>
        <img className='md:w-1/3' src={HeroImg} />
      
    </section>
  )
}

export default Hero
