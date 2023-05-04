import Image from 'next/image'
import React from 'react'
import netflix from '/public/assets/projects/netflix.png'
// import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
import CircleIcon from '@mui/icons-material/Circle'




const netflix1 = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
          <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={netflix} alt='/'/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='py-2'>Netflix Clone (FRONTEND)</h2>
              <h3>ReactJs, TailwindCSS & Firebase</h3>
            </div>
          </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'>
            <p className='text-xl tracking-widest uppercase text-rose-400'>Project</p>
            <h2 className='py-4'>Overview</h2>
            <p>Netflix Clone application is built using ReactJs, TailwindCSS & Firebase. This frontend web application is a replica of the popular streaming platform Netflix, designed and developed for web browsers. The application typically features a similar user interface and design as Netflix, allowing users to browse and watch movies, TV shows, and other video content on-demand. The frontend of the application is responsible for displaying the content, managing user authentication, search functionality, and providing a smooth and intuitive user experience. Additionally, a Netflix clone frontend web application may incorporate advanced features such as personalized recommendations, user profiles, and social sharing capabilities. Such applications are often built using modern web development technologies such as React, Angular, or Vue, and may utilize APIs or backend services to fetch and serve content to the user interface.</p>
            <p><span className='text-rose-600'>Note: While checking the Live demo, make sure to create an account using fake credentials. Browser will give a Phishing site warning as it is a replica of original platform. When prompted, Go to the details and click on visit this unsafe site link.</span></p>
            <Link href='https://vedavyas-netflix.netlify.app/'><button className='px-8 py-2 mt-4 mr-8'>Live Demo</button></Link>
            <Link href='https://github.com/vedavyasananthasetty/Netflix-frontend-clone'><button className='px-8 py-2 mt-4'>Source Code</button></Link>

            
            
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'><CircleIcon className='pr-1'/>ReactJS</p>
                <p className='text-gray-600 py-2 flex items-center'><CircleIcon className='pr-1'/>TailwindCSS</p>
                <p className='text-gray-600 py-2 flex items-center'><CircleIcon className='pr-1'/>Javascript</p>
                <p className='text-gray-600 py-2 flex items-center'><CircleIcon className='pr-1'/>Firebase</p>
                <p className='text-gray-600 py-2 flex items-center'><CircleIcon className='pr-1'/>API</p>
                <p className='text-gray-600 py-2 flex items-center'><CircleIcon className='pr-1'/>React Redux Toolkit</p>
                <p className='text-gray-600 py-2 flex items-center'><CircleIcon className='pr-1'/>Axios</p>
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

export default netflix1