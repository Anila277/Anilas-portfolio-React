import React from 'react'
import './testimonials.css'
import IMG1 from '../../assets/fahad1.png'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: IMG1,
        name: 'Fahad Nisar',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptatibus nobis.'
    },
    {
        avatar: IMG1,
        name: 'Fahad Nisar',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptatibus nobis.'
    },
    {
        avatar: IMG1,
        name: 'Fahad Nisar',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptatibus nobis.'
    },
    {
        avatar: IMG1,
        name: 'Fahad Nisar',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptatibus nobis.'
    },
    {
        avatar: IMG1,
        name: 'Fahad Nisar',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptatibus nobis.'
    },
]


const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}>

                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} />
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">{review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section>
    )
}

export default Testimonials