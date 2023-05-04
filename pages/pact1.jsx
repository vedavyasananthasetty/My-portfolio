import Image from 'next/image'
import React from 'react'
import pact from '/public/assets/projects/pact.png'
// import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
import CircleIcon from '@mui/icons-material/Circle'




const pact1 = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
          <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={pact} alt='/'/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='py-2'>PaCt - Social Media Website (FULL STACK)</h2>
              <h3>ReactJs, NodeJS, ExpressJS, MongoDB, Auth & REST API</h3>
            </div>
          </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'>
            <p className='text-xl tracking-widest uppercase text-rose-400'>Project</p>
            <h2 className='py-4'>Overview</h2>
            <p>Pact is a social media web application built using the MERN stack that can provide a rich and interactive user experience, with a scalable and flexible architecture to handle high traffic and user growth.</p>
            <p>PaCt is built using MERN stack which is a web application that allows users to create profiles, connect with friends, share content, and engage with others. MERN stands for MongoDB, Express.js, React, and Node.js - a popular combination of technologies for building robust and scalable web applications.The social media website built using the MERN stack can provide features such as user authentication, real-time notifications, newsfeed, messaging, commenting, and liking. Users can create profiles, add friends, share posts, upload photos and videos, and engage with other users by commenting, liking, or sharing their posts. The website can also provide features like search and filtering to help users find specific content or users.</p>
            <Link href='https://mypact-app.netlify.app/'><button className='px-8 py-2 mt-4 mr-8'>Live Demo</button></Link>
            <Link href='https://github.com/vedavyasananthasetty/mypact'><button className='px-8 py-2 mt-4'>Source Code</button></Link>
            
            
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'><CircleIcon className='pr-1'/>ReactJS</p>
                <p className='text-gray-600 py-2 flex items-center'><CircleIcon className='pr-1'/>NodeJS</p>
                <p className='text-gray-600 py-2 flex items-center'><CircleIcon className='pr-1'/>MongoDB</p>
                <p className='text-gray-600 py-2 flex items-center'><CircleIcon className='pr-1'/>ExpressJS</p>
                <p className='text-gray-600 py-2 flex items-center'><CircleIcon className='pr-1'/>REST API</p>
                <p className='text-gray-600 py-2 flex items-center'><CircleIcon className='pr-1'/>Authentication (JWT)</p>
                <p className='text-gray-600 py-2 flex items-center'><CircleIcon className='pr-1'/>Bootstrap</p>
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

export default pact1