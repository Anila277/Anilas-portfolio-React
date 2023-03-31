import React from 'react'
import './header.css'
// import CTA from './CTA'
import ME from '../../assets/photo.jpg'
import HeaderSocials from './HeaderSocials'
import Typed from "react-typed";
import Resume from '../../assets/Resume.pdf'



const header = () => {
    return (
        <header>
            <div className="container header__container">

                {/* <CTA /> */}
                <HeaderSocials />
                <ul className="permalinks">
                    <li><a href="#about" className='btn'>About</a></li>
                    <li><a href="#experience" className='btn'>Experience</a></li>
                    <li><a href="#portfolio" className='btn'>Portfolio</a></li>
                    <li><a href="#contact" className='btn'>Contact</a></li>
                    <li><a href={Resume} download className='btn'>Resume</a></li>
                </ul>
                <div className="me">
                    <h3>Hello I'm</h3>
                    <h1 className="typewriter">
                        <Typed
                            strings={[
                                'a Software Engineer',
                                'a Thinker',
                                'a Mother',
                                'a Lover of Life'
                            ]}
                            typeSpeed={150}
                            backSpeed={100}
                            loop
                        />
                    </h1>
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>

            </div>
        </header>
    )
}

export default header