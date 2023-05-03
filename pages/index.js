import Main from '/components/main'
import About from '/components/about'
import Head from 'next/head'
import Skills from '/components/skills'
import Projects from '/components/projects'
import Contact from '/components/contact'
import Navbar from '/components/navbar'


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
