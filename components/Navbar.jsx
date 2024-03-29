'use client';
import {React, useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
// import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
// import {BsFillPersonLinesFill} from 'react-icons/bs'
// import { useRouter } from 'next/router';
import vedImg from '/public/assets/ved.png'
import { useRouter } from 'next/router';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import ArticleIcon from '@mui/icons-material/Article'
import EmailIcon from '@mui/icons-material/Email'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'




const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState('#ecf0f3')
  const [linkColor, setLinkColor] = useState('#1f2937')
  const router = useRouter()

  useEffect(() => {
    if(
      router.asPath === '/netflix1' ||
      router.asPath === '/pact1' ||
      router.asPath === '/port1' ||
      router.asPath === '/ml1'
    ) {
      setNavBg('transparent')
      setLinkColor('#ecf0f3')
    } else {
      setNavBg('#ecf0f3')
      setLinkColor('#1f2937')
    }
  },[router])


  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  },[])


  return (
    <div style={{backgroundColor: `${navBg}`}} className={shadow ? 'fixed w-full h-16 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <Image src={vedImg} alt="/" width="125" height="50" />
        </Link>
      <div>
        <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
          <Link href='/#home'>
            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>  
          </Link>
          <Link href='/#about'>
            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
          </Link>
          <Link href='/#skills'>
            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
          </Link>
          <Link href='/#projects'>
            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
          </Link>
          <Link href='/#contact'>
            <li className='ml-10 text-sm uppercase hover:border-b'>Contact me</li>
          </Link>
        </ul>
        <div onClick={handleNav} className='md:hidden cursor-pointer'>
        <MenuIcon size={25}/>
        </div>
      </div>
      </div>


      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href=''>
              <Image src={vedImg} width='97' height='35' alt='/'/>
              </Link>
              
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
              <CloseIcon/>
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>Passion for Web Design & Development never stops</p>
            </div>
          </div>
          <div className='py-4 flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li>
              </Link>
              <Link href='/#contact'>
                <li className='py-4 text-sm'>Contact Me</li>
              </Link>
            </ul>

            {/* <div className='pt-40'>
              <p className='uppercase tracking-widest text-rose-500'>Reach out to me</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 courser-pointer hover:scale-105 ease-in duration-300'>
                <LinkedInIcon/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 courser-pointer hover:scale-105 ease-in duration-300'>
                <GitHubIcon/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 courser-pointer hover:scale-105 ease-in duration-300'>
                <EmailIcon/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 courser-pointer hover:scale-105 ease-in duration-300'>
                <Link href={'https://www.linkedin.com/in/vedavyasananthasetty/overlay/1635525369948/single-media-viewer?type=DOCUMENT&profileId=ACoAAB-1MXsBjz4wVuK9I4p5w-pCuXDADVyVk70&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BdCuNniJzQyaO1yp4%2BNOsfg%3D%3D/'}><ArticleIcon /></Link>
                </div>
              </div>
            </div> */}
            <div className='pt-16'>
              <p className='uppercase tracking-widest text-rose-500'>Reach out to me</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 courser-pointer hover:scale-105 ease-in duration-300'>
                <Link href='https://www.linkedin.com/in/vedavyasananthasetty/'><LinkedInIcon /></Link>

                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 courser-pointer hover:scale-105 ease-in duration-300'>
                <Link href='https://github.com/vedavyasananthasetty'><GitHubIcon /></Link>

                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 courser-pointer hover:scale-105 ease-in duration-300'>
                <a href="mailto:a.vedavyas12@yahoo.com"><EmailIcon /></a>

                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 courser-pointer hover:scale-105 ease-in duration-300'>
                <Link href={'https://www.linkedin.com/in/vedavyasananthasetty/overlay/1635525369948/single-media-viewer?type=DOCUMENT&profileId=ACoAAB-1MXsBjz4wVuK9I4p5w-pCuXDADVyVk70&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BdCuNniJzQyaO1yp4%2BNOsfg%3D%3D/'}><ArticleIcon /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar