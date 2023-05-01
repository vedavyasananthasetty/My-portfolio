import Image from 'next/image'
import React from 'react'
import port from '../public/assets/projects/port.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'



const port1 = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
          <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={port} alt='/'/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='py-2'>My Portfolio (FRONTEND)</h2>
              <h3>NextJS & TailwindCSS</h3>
            </div>
          </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'>
            <p className='text-xl tracking-widest uppercase text-rose-400'>Project</p>
            <h2 className='py-4'>Overview</h2>
            <p>My portfolio web application is a sleek and modern online presence for users to showcase their skills and work to potential employers and clients.
This web application is built using NextJS and TailwindCSS. It showcases my skills, projects, and experience in a visually appealing and responsive manner. NextJS is a popular React-based framework for building server-side rendered web applications, while TailwindCSS is a utility-first CSS framework that provides pre-designed styles and components for faster and more consistent UI development.</p>
<p>The portfolio web application includes features such as a home page with an introduction and summary of the user's skills and experience, a projects page with detailed information and images of the user's projects, and a contact page with a form for users to reach out to the user. The application also includes effects, transitions, and responsive design to provide an engaging and intuitive user experience.</p>
            <Link href='https://vedavyas-portfolio.netlify.app/'><button className='px-8 py-2 mt-4 mr-8'>Live Demo</button></Link>
            <Link href='https://github.com/vedavyasananthasetty/My-portfolio'><button className='px-8 py-2 mt-4'>Source Code</button></Link>
            
            
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>NextJS</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>TailwindCSS</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Javascript</p>
                
              </div>
            </div>
          </div>
          <Link href='/#projects'>
            <p className='underline cursor-pointer'>Back</p>
          </Link>
        </div>  
        </div>
    
  )
}

export default port1