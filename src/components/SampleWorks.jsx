import React from 'react'
import { Link } from 'react-router-dom'
import scrollpost from "./portfoli screenshots/Screenshot (17).png"
import millionares from "./portfoli screenshots/Screenshot (18).png"
import expenseTracker from "./portfoli screenshots/Screenshot (19).png"
import playstore from "./portfoli screenshots/Screenshot (20).png"

function SampleWorks() {
  return (
    <section id='projects' className='bg-slate-50 text-black my-32'>
        <div className="md:max-w-6xl max-w-5xl mx-auto"> 
        <h1 className="text-5xl font-bold my-4 text-left px-5">A Few More Drafts</h1>
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 space-y-4 gap-2 w-full place-items-center">
                  

           <div className="flex flex-col w-[22rem]">
                            <div className="card w-full bg-slate-50 shadow-xl">
                                <figure className="h-60 w-full yes">
                                    <img src={scrollpost} alt="Shoes" className="rounded-xl absolute inset-0 h-full w-full" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Infinite Scroll Website</h2>
                                    <p>This is an infinite scroll post website that continues to fetch new posts as the user scrolls down</p>
                                    <div className="card-actions">
                                        <Link to={'https://ephemeral-rolypoly-914a78.netlify.app/'} target='_blank' className='btn btn-ghost border-2 hover:btn-accent hover:text-white border-accent w-full'>
                                                View
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="flex flex-col w-[22rem]">
                            <div className="card w-full bg-slate-50 shadow-xl">
                                <figure className="h-60 w-full yes">
                                    <img src={millionares} alt="Shoes" className="rounded-xl absolute inset-0 h-full w-full" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Millionare Generator Website</h2>
                                    <p>This is a website that genetate users with random wealth and makes them millionares</p>
                                    <div className="card-actions">
                                        <Link to={'https://spectacular-pudding-718d16.netlify.app/'} target='_blank' className='btn btn-ghost border-2 hover:btn-accent hover:text-white border-accent w-full'>
                                                View
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="flex flex-col w-[22rem]">
                            <div className="card w-full bg-slate-50 shadow-xl">
                                <figure className="h-60 w-full yes">
                                    <img src={expenseTracker} alt="Shoes" className="rounded-xl absolute inset-0 h-full w-full" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Expense Tracker Website</h2>
                                    <p>This is a website used to track the user's expenses and income</p>
                                    <div className="card-actions">
                                        <Link to={'https://grand-dragon-6f5cbf.netlify.app/'} target='_blank' className='btn btn-ghost border-2 hover:btn-accent hover:text-white border-accent w-full'>
                                                View
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    </div>
                    
                    <div className="flex flex-col w-[22rem]">
                            <div className="card w-full bg-slate-50 shadow-xl">
                                <figure className="h-60 w-full yes">
                                    <img src={playstore} alt="Shoes" className="rounded-xl absolute inset-0 h-full w-full scale-105" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Play store Website</h2>
                                    <p>This is a playstore website </p>
                                    <div className="card-actions">
                                        <Link to={'https://iridescent-moonbeam-2b8195.netlify.app/'} target='_blank' className='btn btn-ghost border-2 hover:btn-accent hover:text-white border-accent w-full'>
                                                View
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    </div>

           </div>
        </div>
    </section>
  )
}

export default SampleWorks