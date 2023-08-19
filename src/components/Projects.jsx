import React from 'react'
import { Link } from 'react-router-dom'
import music from "./portfoli screenshots/Screenshot (9).png"
import weather from "./portfoli screenshots/Screenshot (10).png"
import exchangeRate from "./portfoli screenshots/Screenshot (11).png"
import airplane from "./portfoli screenshots/Screenshot (12).png"
import studio from "./portfoli screenshots/Screenshot (13).png"
import clipboard from "./portfoli screenshots/Screenshot (14).png"
import hamster from "./portfoli screenshots/Screenshot (15).png"
import gamesWeb from "./portfoli screenshots/Screenshot (16).png"

function Projects() {
  return (
    <section id='projects' className='bg-slate-50 text-black my-10'>
        <div className="md:max-w-6xl max-w-5xl mx-auto"> 
        <h1 className="text-5xl font-bold my-4 text-left px-5">Projects</h1>
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 space-y-4 gap-2 w-full place-items-center">
                    {/* Items */}
                    <div className="flex flex-col  w-[22rem]">
                            <div className="card w-full bg-slate-50 shadow-xl">
                                <figure className="h-60 w-full yes">
                                    <img src={music} alt="Shoes" className="rounded-xl absolute inset-0 h-full w-full scale-105" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Music Player Website</h2>
                                    <p>This is a website that gives the user the ability to add, store, and play any kind of music they desire </p>
                                    <div className="card-actions">
                                        <Link to={'https://illustrious-pika-d2e2ea.netlify.app/'} target='_blank' className='btn btn-ghost border-2 hover:btn-accent hover:text-white border-accent w-full'>
                                                View
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="flex flex-col w-[22rem]">
                            <div className="card w-full bg-slate-50 shadow-xl">
                                <figure className="h-60 w-full yes">
                                    <img src={weather} alt="Shoes" className="rounded-xl absolute inset-0 h-full w-full" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Weather Forecast Website</h2>
                                    <p>This is a website that Forecasts the weather at your current location. The website currently has a limited database</p>
                                    <div className="card-actions">
                                        <Link to={'https://inquisitive-shortbread-606657.netlify.app'} target='_blank' className='btn btn-ghost border-2 hover:btn-accent hover:text-white border-accent w-full'>
                                                View
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="flex flex-col w-[22rem]">
                            <div className="card w-full bg-slate-50 shadow-xl">
                                <figure className="h-60 w-full yes">
                                    <img src={exchangeRate} alt="Shoes" className="rounded-xl absolute inset-0 h-full w-full scale-105" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Exchange Rate Calculator</h2>
                                    <p>This is a website that shows the current value of all currencies in comparism with others for proper evaluation</p>
                                    <div className="card-actions">
                                        <Link to={'https://endearing-treacle-fce45c.netlify.app'} target='_blank' className='btn btn-ghost border-2 hover:btn-accent hover:text-white w-full'>
                                                View
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="flex flex-col w-[22rem]">
                            <div className="card w-full bg-slate-50 shadow-xl">
                                <figure className="h-60 w-full yes">
                                    <img src={airplane} alt="Shoes" className="rounded-xl absolute inset-0 h-full w-full scale-105" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Airline Website</h2>
                                    <p>This is a static airline website designed with Tailwind CSS</p>
                                    <div className="card-actions">
                                        <Link to={'https://dreamy-kulfi-8ba77c.netlify.app'} target='_blank' className='btn btn-ghost border-2 hover:btn-accent hover:text-white border-accent w-full'>
                                                View
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="flex flex-col w-[22rem]">
                            <div className="card w-full bg-slate-50 shadow-xl">
                                <figure className="h-60 w-full yes">
                                    <img src={studio} alt="Shoes" className="rounded-xl absolute inset-0 h-full w-full scale-105" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Loops Studio Website</h2>
                                    <p>This is a static studio website designed with Tailwind CSS</p>
                                    <div className="card-actions">
                                        <Link to={'https://resilient-selkie-c4ce25.netlify.app'} target='_blank' className='btn btn-ghost border-2 hover:btn-accent hover:text-white border-accent w-full'>
                                                View
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="flex flex-col w-[22rem]">
                            <div className="card w-full bg-slate-50 shadow-xl">
                                <figure className="h-60 w-full yes">
                                    <img src={clipboard} alt="Shoes" className="rounded-xl absolute inset-0 h-full w-full scale-105" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Clipboard Website</h2>
                                    <p>This is a static website designed with Tailwind CSS</p>
                                    <div className="card-actions">
                                        <Link to={'https://playful-lebkuchen-277c47.netlify.app'} target='_blank' className='btn btn-ghost border-2 hover:btn-accent hover:text-white border-accent w-full'>
                                                View
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="flex flex-col w-[22rem]">
                            <div className="card w-full bg-slate-50 shadow-xl">
                                <figure className="h-60 w-full yes">
                                    <img src={hamster} alt="Shoes" className="rounded-xl absolute inset-0 h-full w-full scale-105" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Hamster Movie Website</h2>
                                    <p>This website shows the latest movie releases and animes provided within its API</p>
                                    <div className="card-actions">
                                        <Link to={'https://react-hamster-movie-app.vercel.app/'} target='_blank' className='btn btn-ghost border-2 hover:btn-accent hover:text-white border-accent w-full'>
                                                View
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="flex flex-col w-[22rem] lg:w-[40rem] lg:relative lg:translate-x-56">
                                <div className="card w-full bg-slate-50 shadow-xl">
                                    <figure className="h-60 w-full yes">
                                        <img src={gamesWeb} alt="Shoes" className="rounded-xl absolute inset-0 h-full w-full" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">Game Website</h2>
                                        <p>This website shows the latest game releases and free-to-play online games and the individual links to their websites</p>
                                        <p><span className="font-bold">Note</span>: it requires the CORS Unblock chrome extension enabled for it to work</p>
                                        <div className="card-actions">
                                            <Link to={'https://react-games-web.vercel.app//'} target='_blank' className='btn btn-ghost border-2 hover:btn-accent hover:text-white border-accent w-full'>
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

export default Projects
