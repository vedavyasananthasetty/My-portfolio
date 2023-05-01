import Image from 'next/image'
import React from 'react'
import netflix from '../public/assets/projects/netflix.png'
import PaCt from '../public/assets/projects/PaCt.png'
import Link from 'next/link'
import ProjectItem from './ProjectItem'
import mml from '../public/assets/projects/mml.png'
import port from '../public/assets/projects/port.png'


const Projects = () => {
  return (
    <div id='projects' className='w-full pt-16'>
      <div className='max-w-[1240] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-rose-400'>Projects</p>
        <h2 className='py-4'>What I Have Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

          <ProjectItem title='Netflix Clone (FRONTEND)' backgroundImg={netflix} projectUrl='netflix1' desc='Built Using ReactJs, TailwindCSS & Firebase' />
          <ProjectItem title='PaCt - Social Media Website' backgroundImg={PaCt} projectUrl='/pact1' desc='Built Using (MERN Stack) ReactJs, NodeJS, ExpressJS, MongoDB, Auth & REST API' />
          <ProjectItem title='My Portfolio (FRONTEND)' backgroundImg={port} projectUrl='/port1' desc='Built Using NextJS & TailwindCSS' />
          <ProjectItem title='Music Listener Mood Prediction' backgroundImg={mml} projectUrl='/ml1' desc='Built Using Python, Tkinter, Flask & Machine Learning Algorithms' />

        </div>
      </div>
    </div>
  )
}

export default Projects