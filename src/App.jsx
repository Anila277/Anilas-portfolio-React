import React, { useState } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { createContext } from 'react'
import ReactSwitch from 'react-switch'


export const ThemeContext = createContext('null');

const App = () => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className='mode' id={theme}>
                <div className="switch">
                    <label>{theme === 'light' ? '' : ''} </label>
                    <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />

                </div>
                <Header />
                <Nav />
                <About />
                <Experience />
                {/* <Services /> */}
                <Portfolio />
                {/* <Testimonials /> */}
                <Contact />
                <Footer />

            </div>
        </ThemeContext.Provider>
    )
}

export default App