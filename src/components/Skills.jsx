import React from 'react'
import desk from "./assets/steve7.jpg"

function Skills() {
  return (
    <section id='works' className='mt-15 bg-slate-50 text-black'>
        <div className="max-w-5xl mx-auto">
        <div className="hero min-h-screen text-black">
          <div className="hero-content flex-col md:flex-row">
            <img src={desk} alt='' className="md:max-w-lg  object-contain rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Skills</h1>
              <p className="py-6 leading-8 px-2">
              - Proficient in HTML, CSS, SASS, Post CSS, Tailwind CSS, JavaScript, Firebase,
                React.JS.
                - Experience with Adobe Photoshop for graphic design and image optimization.
                - Strong grasp of responsive and mobile-first design principles.

                - Knowledgeable in social media integration and user engagement strategies.
                - Effective problem-solving skills and team collaboration abilities.
              </p>
        </div>
      </div>
    </div>
        </div>
    </section>
  )
}

export default Skills
