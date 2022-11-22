import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/fahad1.png'
import IMG2 from '../../assets/fahad1.png'
import IMG3 from '../../assets/fahad1.png'
import IMG4 from '../../assets/fahad1.png'
import IMG5 from '../../assets/fahad1.png'


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Is Funsy',
        github: 'https://github.com',
        demo: 'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    },
    {
        id: 2,
        image: IMG1,
        title: 'Is Funsy',
        github: 'https://github.com',
        demo: 'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    },
    {
        id: 3,
        image: IMG1,
        title: 'Is Funsy',
        github: 'https://github.com',
        demo: 'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    },
    {
        id: 4,
        image: IMG1,
        title: 'Is Funsy',
        github: 'https://github.com',
        demo: 'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    },
    {
        id: 5,
        image: IMG1,
        title: 'Is Funsy',
        github: 'https://github.com',
        demo: 'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    },
    {
        id: 6,
        image: IMG1,
        title: 'Is Funsy',
        github: 'https://github.com',
        demo: 'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

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