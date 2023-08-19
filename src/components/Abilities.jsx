import React from 'react'

function Abilities() {
  return (
    <section  className='bg-slate-50 text-black my-10'>
    <div className="max-w-5xl mx-auto">
        <div className="flex flex-col justify-center items-center space-y-10">
        <h1 className="text-5xl font-bold">Skill Level</h1>

        <div className="center md:shadow-lg p-20 w-full">
            <div className="skillBox">
                    <p>Html5</p>
                    <p>90%</p>
                    <div className="skill">
                        <div className="skill-level" style={{width: '90%'}}></div>
                    </div>
                </div>

                <div className="skillBox">
                    <p>Css</p>
                    <p>90%</p>
                    <div className="skill">
                        <div className="skill-level" style={{width: '90%'}}></div>
                    </div>
                </div>

                <div className="skillBox">
                    <p>Scss</p>
                    <p>70%</p>
                    <div className="skill">
                        <div className="skill-level" style={{width: '70%'}}></div>
                    </div>
                </div>

                <div className="skillBox">
                    <p>Git</p>
                    <p>70%</p>
                    <div className="skill">
                        <div className="skill-level" style={{width: '70%'}}></div>
                    </div>
                </div>

                <div className="skillBox">
                    <p>PostCss</p>
                    <p>85%</p>
                    <div className="skill">
                        <div className="skill-level" style={{width: '85%'}}></div>
                    </div>
                </div>

                <div className="skillBox">
                    <p>Tailwind css</p>
                    <p>90%</p>
                    <div className="skill">
                        <div className="skill-level" style={{width: '90%'}}></div>
                    </div>
                </div>

                <div className="skillBox">
                    <p>Adobe Photoshop</p>
                    <p>70%</p>
                    <div className="skill">
                        <div className="skill-level" style={{width: '70%'}}></div>
                    </div>
                </div>

                <div className="skillBox">
                    <p>Javerscript</p>
                    <p>80%</p>
                    <div className="skill">
                        <div className="skill-level" style={{width: '80%'}}></div>
                    </div>
                </div>
    
                <div className="skillBox">
                    <p>React Js</p>
                    <p>80%</p>
                    <div className="skill">
                        <div className="skill-level" style={{width: '80%'}}></div>
                    </div>
                </div>
        </div>

        </div>
    </div>
</section>
  )
}

export default Abilities
