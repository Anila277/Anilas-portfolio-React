import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_epfundn', 'template_622ppmg', form.current, '4tw5ssZUskaeW7yhx')
        e.target.reset()
    };

    return (
        <section id='contact'>
            <h2>Get In Touch</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <AiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>developer.naaz@gmail.com</h5>
                        <a href="mailto:developer.naaz@gmail.com" target='_blank'>Send a Message</a>
                    </article>

                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name="email" placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact