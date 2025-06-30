import { useState } from 'react'
import Hero from './component/hero'
import Webstack from './component/webstack'
import About from './component/about-me'
import WorkExperience from './component/work-experience'
import Project from './component/projects'

function App() {
  return (
    <div className=' bg-zinc-100 dark:bg-stone-900'>
      <Hero/>
      <Webstack/>
      <About/>
      <Project></Project>
      <WorkExperience/>
    </div>
  )
}

export default App
