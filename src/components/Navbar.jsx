import React from 'react'
import logo from "./assets/logo_transparent.png"


function Navbar() {
  return (
    <>
      <div className="bg-transparent">
        <nav className="max-w-5xl mx-auto text-black">
          <div className="flex justify-between items-center py-3 px-3">
                <div>
                  <h1 className="md:text-4xl text-xl font-bold tracking-wider">Portfolio</h1>
                </div>

                <div className="hidden md:block w-32 h-16 relative">
                      <img src={logo} alt="" className='absolute -translate-y-8'/>
                </div>

                <ul className='flex items-center justify-center space-x-3'>
                  <a href="#works" className='btn btn-ghost'> Works</a>
                  <a href="#projects" className='btn btn-ghost'> Projects</a>
                </ul>
                
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
