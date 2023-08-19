import React from 'react'
import Dice from "./assets/pexels-rostislav-uzunov-5011647.jpg"

function YearsofExperience() {
  return (
    <section id='works' className='bg-slate-50 text-black'>
        <div className="max-w-5xl mx-auto">
        <div className="hero min-h-screen text-black">
        <div className="hero-content flex-col md:flex-row-reverse">
            <img src={Dice} alt='' className="md:max-w-lg  object-contain rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Experience</h1>
              <p className="py-6 leading-8 px-2">
              Information Technology Intern | Nigerian National Petroleum Corporation (NNPC),
              Nigeria. 2021 – 2023.
              Duties:
              - Developed and maintained internal web applications, collaborating with cross-
              functional teams to ensure seamless user experiences.
              - Designed responsive and user-friendly front-end interfaces using HTML, CSS, and
              JavaScript.
              - Utilized Adobe Photoshop to create and optimize visual assets for websites.
              - Enhanced user interface consistency and usability across applications.
              </p>
        </div>
      </div>
    </div>
        </div>
    </section>
  )
}

export default YearsofExperience
