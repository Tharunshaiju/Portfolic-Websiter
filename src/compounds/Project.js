import React from 'react'
import EcommerceImg from '../assets/ecommerce-websites.jpg'
import FoodImg from '../assets/food-ecommerce.jpg'
import WebsiteImg from '../assets/website-blog.jpg'

const Project = () => {
  return (
    <section id='project' className='flex-col px-5 py-20 justify-center bg-primary text-white'>
    <div className='w-full '>
        <div className='flex flex-col py-5 px-10'>
             <h1 className='text-4xl text-white border-b-2 mb-5 w-[150px] font-bold '>Project</h1>
             <p>These are some of my best project. I have built these with React.js. Check them out.</p>
        </div>
      </div>
      <div className='w-full'>

    <div className='flex flex-col md:flex-row px-10 gap-5'>

        <div className='relative'>
        <img className='h-[200px] w-[500px]' src={EcommerceImg} />
         <div className='animation'>
            <p className='text-center px-5 py-16'>Ecommerce Website.Bulit using React</p>
         </div>
        </div>

        <div className='relative'>
        <img className='h-[200px] w-[500px]' src={FoodImg} />
          <div  className='animation'>
        <p className='text-center px-5 py-16'>Food Ecommerce Website like Swiggy, built using HTML and CSS</p>
          </div>
        </div>

        <div className='relative'>
        <img className='h-[200px] w-[500px]' src={WebsiteImg} />
           <div  className='animation'>
        <p className='text-center px-5 py-16'>Basic Blog Website. Bulit using React </p>
           </div>
        </div>

        </div>
      </div>

    </section>    
  )
}

export default Project
