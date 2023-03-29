import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/get-it-done.png'
import IMG2 from '../../assets/fantasies.png'
import IMG3 from '../../assets/is-funsy.png'
import IMG4 from '../../assets/pot-of-flowers.png'
import IMG5 from '../../assets/ping-pong.png'
import IMG6 from '../../assets/calculator.png'


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Get It Done!',
        github: 'https://github.com/Anila277/ToDo-App',
        demo: 'https://todo-app-91.herokuapp.com/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Fantasies',
        github: 'https://github.com/Anila277/Fantasies-App',
        demo: 'https://fantasies-a-poetry-escape.netlify.app/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Is Funsy',
        github: 'https://github.com/Anila277/Is-Funsy',
        demo: 'https://anila277.github.io/Is-Funsy/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Pot Of Flowers',
        github: 'https://github.com/Anila277/Pot-of-Flowers',
        demo: 'https://pot-of-flowers.onrender.com/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Ping-Pong!',
        github: 'https://github.com/Anila277/ToDo-App',
        demo: 'https://anila277.github.io/ping-pong-Game-JS/'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Calculator',
        github: 'https://github.com/Anila277/javascriptCalc',
        demo: ''
    },
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            {/* <h5>Portfolio</h5> */}
            <h2>My Recent Work</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio