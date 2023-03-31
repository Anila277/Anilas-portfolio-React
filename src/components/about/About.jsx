import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { BsCodeSlash } from 'react-icons/bs'
import { VscFolderLibrary } from 'react-icons/vsc'
import CTA from './CTA'



const about = () => {
    return (
        <section id='about'>
            <h2>A Little About Me</h2>

            <div className='container about__container'>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                        </article>

                        <article className="about__card">
                            <BsCodeSlash className='about__icon' />
                            <h5>Skills</h5>
                        </article>

                        <article className="about__card">

                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                        </article>
                    </div>

                    <p>
                        Full Stack Software Engineer with an eye for detail and the ability to identify and solve
                        complex problems analytically and critically. Effective planner who understands the full
                        life cycle of web applications and able to create responsive websites utilizing frontend
                        libraries and frameworks such as React and Bootstrap. Ability to approach each project with
                        an open mind while keeping the user in mind to improve the overall experience.
                    </p>
                    <CTA />

                    {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}
                </div>
            </div>
        </section >
    )
}

export default about