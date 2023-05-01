import Main from '../components/Main'
import About from '../components/About'
import Head from 'next/head'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Navbar from '@/components/Navbar'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Vedavyas | Full-Stack Developer</title>
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
