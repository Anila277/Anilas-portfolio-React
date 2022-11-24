import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            {/* <h5>What Skills I have</h5> */}
            <h2>My Skills</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    {/* <h3>Frontend Development</h3> */}
                    <div className="experience__content">

                        <article className='experience__details'>
                            <div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                                    class="" />
                            </div>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                    class="" />
                            </div>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
                                    class="" />
                            </div>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                                    class="" />
                            </div>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
                                    class="" />
                            </div>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                                    class="" />
                            </div>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                                    class="" />
                            </div>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"
                                    class="" />
                            </div>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                    class="" />
                            </div>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
                                    class="" />
                            </div>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg"
                                    class="" />
                            </div>
                        </article>
                        <article className='experience__details'>
                            <div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                                    class="" />
                            </div>
                        </article>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Experience