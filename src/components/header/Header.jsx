import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/fahad.png'
import HeaderSocials from './HeaderSocials'
import Typed from "react-typed";


const header = () => {
    return (
        <header>
            <div className="container header__container">
                <h3>Hello I'm</h3>
                <h1 className="typewriter">
                    <Typed
                        strings={[
                            'a Software Engineer',
                            'a Thinker',
                            'a Mother',
                            'Lover of Life'
                        ]}
                        typeSpeed={150}
                        backSpeed={100}
                        loop
                    />
                </h1>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    {/* <img src={ME} alt="me" /> */}
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>

            </div>
        </header>
    )
}

export default header