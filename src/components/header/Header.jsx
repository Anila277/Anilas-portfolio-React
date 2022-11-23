import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/fahad.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                {/* <h1>Anila Nisar</h1> */}
                <h1 className="text-light">a Software Developer</h1>
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