import Link from 'next/link'
import React from 'react'
// import { AiOutlineMail } from 'react-icons/ai'
// import { BsFillPersonLinesFill } from 'react-icons/bs'
// import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import ArticleIcon from '@mui/icons-material/Article'
import EmailIcon from '@mui/icons-material/Email'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>Passion for Web Design & Development never stops</p>
          <h1 className='py-4 text-gray-700'>Hello World, I am <span className='text-rose-400'>Vedavyas Sai Ananthasetty</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Full-Stack Web Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
          <span className='text-rose-500'>Hi,</span> I am a Full-Stack Web Developer specialized in designing, building and deploying Font-end and Back-end Web Technologies. I am a believer of finding and solving real world challenges by constantly learning and staying updated with latest Technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 courser-pointer hover:scale-110 ease-in duration-300'>
            <Link href='https://www.linkedin.com/in/vedavyasananthasetty/'><LinkedInIcon /></Link>
              
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 courser-pointer hover:scale-110 ease-in duration-300'>
            <Link href='https://github.com/vedavyasananthasetty'><GitHubIcon /></Link>
              
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 courser-pointer hover:scale-110 ease-in duration-300'>
              
            <a href="mailto:a.vedavyas12@yahoo.com"><EmailIcon /></a>
              
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 courser-pointer hover:scale-110 ease-in duration-300'>
            <Link href={'https://www.linkedin.com/in/vedavyasananthasetty/overlay/1635525369948/single-media-viewer?type=DOCUMENT&profileId=ACoAAB-1MXsBjz4wVuK9I4p5w-pCuXDADVyVk70&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BdCuNniJzQyaO1yp4%2BNOsfg%3D%3D/'}><ArticleIcon /></Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main