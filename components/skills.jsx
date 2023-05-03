import React from 'react'
import Image from 'next/image'
import htmlImg from '/public/assets/skills/html.png'
import javascriptImg from '/public/assets/skills/javascript.png'
import javaImg from '/public/assets/skills/java.png'
import pythonImg from '/public/assets/skills/python.png'
import mysqlImg from '/public/assets/skills/mysql.png'
import netImg from '/public/assets/skills/NET_Core.png'
import tailwindImg from '/public/assets/skills/tailwind.png'
import reactImg from '/public/assets/skills/react.png'
import nodeImg from '/public/assets/skills/node.png'
import nextImg from '/public/assets/skills/nextjs.png'
import mongoImg from '/public/assets/skills/mongo.png'
import expImg from '/public/assets/skills/expressJS.png'
import angImg from '/public/assets/skills/angular.png'
import bootImg from '/public/assets/skills/bootstrap.png'
import djImg from '/public/assets/skills/django.png'
import awsImg from '/public/assets/skills/aws.png'
import docImg from '/public/assets/skills/docker.png'
import fireImg from '/public/assets/skills/firebase.png'
import githImg from '/public/assets/skills/github1.png'
import gitlImg from '/public/assets/skills/gitlab.png'
import cssImg from '/public/assets/skills/css.png'
import csImg from '/public/assets/skills/cs.png'


const skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-rose-400'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image src={htmlImg} width='65' height='65' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image src={cssImg} width='65' height='65' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image src={javascriptImg} width='65' height='65' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JAVASCRIPT</h3>
              </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image src={javaImg} width='65' height='65' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JAVA</h3>
              </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image src={pythonImg} width='65' height='65' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>PYTHON</h3>
              </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image src={csImg} width='65' height='65' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>C#</h3>
              </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image src={mysqlImg} width='65' height='65' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MYSQL</h3>
              </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image src={netImg} width='65' height='65' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>.NET CORE</h3>
              </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image src={tailwindImg} width='65' height='65' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>TAILWIND CSS</h3>
              </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image src={reactImg} width='65' height='65' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>REACTJS</h3>
              </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image src={nodeImg} width='65' height='65' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NODEJS</h3>
              </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image src={nextImg} width='65' height='65' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NEXTJS</h3>
              </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image src={mongoImg} width='65' height='65' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MONGODB</h3>
              </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image src={expImg} width='65' height='65' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>EXPRESSJS</h3>
              </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image src={angImg} width='65' height='65' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>ANGULARJS</h3>
              </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image src={bootImg} width='65' height='65' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>BOOTSTRAP</h3>
              </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image src={djImg} width='65' height='65' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>DJANGO</h3>
              </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image src={awsImg} width='65' height='65' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>AWS</h3>
              </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image src={docImg} width='65' height='65' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>DOCKER</h3>
              </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image src={fireImg} width='65' height='65' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>FIREBASE</h3>
              </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image src={githImg} width='65' height='65' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>GITHUB</h3>
              </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image src={gitlImg} width='65' height='65' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>GITLAB</h3>
              </div>
          </div>
        </div>
        </div>
      </div>

    </div>
  )
}

export default skills