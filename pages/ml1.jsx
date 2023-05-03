import Image from 'next/image'
import React from 'react'
import mml from '/public/assets/projects/mml.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'



const ml1 = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
          <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={mml} alt='/'/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='py-2'>Music Listener Mood Prediction</h2>
              <h3>Python, Tkinter, Flask & Machine Learning Algorithms</h3>
            </div>
          </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'>
            <p className='text-xl tracking-widest uppercase text-rose-400'>Project</p>
            <h2 className='py-4'>Overview</h2>
            <p>Human Beings are vexed up with a variety of problems such as anxiety, stress, work tensions, and
emotional outbreaks. This may be caused due to Job, family problems, responsibilities, and pressure
from friends. During the battle with an emotional crisis, a human desperately searches for means to
riddance the problem. Music, being one of the most popular means of entertainment, can help
during such situations. It provides a way to express our feelings and to enhance our state of mind.
The most important part of music is the mood. Every situation we go through has a spirit associated
with it. There are many songs that are written on emotions. Many public places, such as restaurants,
tourist places, and cultural events, have a theme song in the background. This enhances the mood of
the customers. In this regard, we are performing a mood classification of songs using lyrics alone.
We are implementing Decision Tree and Random Forest models for the problem. The exploratory
outcomes through training and testing the model show that music related to “happy” and “sad”
states of mind can be anticipated with sensible accuracy dependent on features extracted from tune
verses.</p>
            
            <Link href='https://github.com/vedavyasananthasetty/Music-Listener-Mood-Prediction-from-the-Lyrics-Using-Machine-Learning'><button className='px-8 py-2 mt-4'>Source Code</button></Link>
            
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Python</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Tkinter</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Flask</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Machine Learning Algorithms</p>
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

export default ml1