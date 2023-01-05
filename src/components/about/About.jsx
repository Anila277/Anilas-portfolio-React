import React from 'react'
import './about.css'
import ME from '../../assets/anila.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const about = () => {
    return (
        <section id='about'>
            {/* <h5>Get to Know</h5> */}
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        {/* <img src={ME} alt="About Image" /> */}
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>
                        </article>

                        {/* <article className="about__card">
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article> */}

                        <article className="about__card">
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>11+</small>
                        </article>
                    </div>

                    <p>
                        Full Stack Software Engineer with an eye for detail and the ability to identify and solve
                        complex problems analytically and critically. Effective planner who understands the full
                        life cycle of web applications and able to create responsive websites utilizing frontend
                        libraries and frameworks such as React and Bootstrap. Ability to approach each project with
                        an open mind while keeping the user in mind to improve the overall experience.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default about