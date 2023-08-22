import React from 'react'
import {FaTwitter, FaFacebook, FaLinkedin, FaInstagram} from "react-icons/fa"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='bg-slate-100 '>
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-lg text-gray-900"> &copy; Copyright 2023. All Rights Reserved  </p>

            <div className="flex justify-center space-x-5">
            <Link to={'https://www.facebook.com/steven.onoja.12?mibextid=ZbWKwL'}>
                <FaFacebook size={30} className='ficon'/>
            </Link> 
            <Link to={'https://twitter.com/levelp7?t=Kfdj5hN6Ljc7m2s2hDz_xg&s=08 '}>
                <FaTwitter size={30} className='ficon'/>
            </Link> 
            <Link to={'https://www.linkedin.com/in/steven-onoja-95668a225'}>
                <FaLinkedin size={30} className='ficon'/>
            </Link> 
            <Link to={'https://instagram.com/_undespuited_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D '}>
                <FaInstagram size={30} className='ficon'/>
            </Link> 
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer
