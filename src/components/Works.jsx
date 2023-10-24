import React from 'react'
import img3 from "./assets/WhatsApp Image 2023-10-21 at 19.39.37_6955bd1b.jpg"
import Skills from './Skills'
import YearsofExperience from './YearsofExperience'
import Projects from './Projects'
import SampleWorks from './SampleWorks'



function Works() {
  return (
    <div  className='bg-slate-50'>
    <section id='about' className='mt-20'>
        <div className="max-w-5xl mx-auto">
         <div className="hero min-h-screen text-black">
          <div className="hero-content flex-col md:flex-row-reverse">
            <img src={img3} alt='' className="md:max-w-lg  object-contain rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">About me</h1>
              <p className="py-6 leading-10 px-2">
              Hello, my name is Steven Onoja. I am a highly motivated and skilled Front-End Engineer and Developer with a strong academic background in Computer Engineering and considerable experience as a software engineer at one of the world's largest multi-national energy corporations. I am now Seeking new opportunities to expand my portfolio and career and contribute my technical expertise in HTML, CSS JavaScript, and React.JS to create visually appealing and user-friendly web applications for my service users because I believe quality, excellence, and functionality are key attributes to the success of our products and services.
              </p>
        </div>
      </div>
    </div>

          
        </div>
    </section>

    <Skills/>
    {/* <Abilities/> */}
    <YearsofExperience/>
    <Projects/>
    <SampleWorks/>4
    </div>
  )
}

export default Works