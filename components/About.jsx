import React from 'react'

import Link from 'next/link'
const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-10'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-rose-400'>About</p>
          <p className='py-2 text-gray-600'>There are two ways to write error-free programs; only the third one works.</p>
          <p>- <span className='text-rose-500'>Alan Perlis</span></p>
          <h2 className='py-4'>Who AM I?</h2>
          <p className='py-2 text-gray-600'>
            As a Full Stack Developer, I bring a unique blend of technical expertise and creative problem-solving skills to the development of web and mobile applications. With a strong foundation in both front-end and back-end technologies, I excel at building end-to-end solutions that deliver seamless user experiences. My experience includes working with a variety of programming languages, frameworks, and databases, such as JavaScript, React, Node.js, Python, Django, MySQL, and MongoDB.
          </p>
          <p className='py-2 text-gray-600'>
            I am passionate about staying up-to-date with the latest trends and technologies in the field, and constantly strive to improve my skills through ongoing learning and development.
          </p>
          <p className='py-2 text-gray-600'>
            Whether I amm working on a new project or troubleshooting a challenging issue, I approach each task with a dedication to excellence and a commitment to delivering results. If you are looking for a talented Full Stack Developer who can help you bring your ideas to life, <span className='text-rose-600 underline cursor-pointer'>let us connect!</span> 
          </p>
          <Link href='/#projects'>
          <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
          </Link>
          
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img className='rounded-xl' src="https://scontent.fhyd1-3.fna.fbcdn.net/v/t1.6435-9/118867103_356203462433435_888147136628498698_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8uT0xexYl6gAX9xMTyq&_nc_ht=scontent.fhyd1-3.fna&oh=00_AfDiezSonh3xCr-EEVU0fxWdDcLOV5Nr_chLfOMxilbcoA&oe=64760FC7" alt="" />
          
        </div>
      </div>
    </div>
  )
}

export default About