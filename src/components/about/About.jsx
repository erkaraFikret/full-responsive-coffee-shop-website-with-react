import React from 'react'
import aboutImg from '../../assets/about-img.jpg'
import {FiCheck} from "react-icons/fi"
import './about.css'

const About = () => {
    return (
        <section className='about section' id='about'>
            <div className="about__grid container grid">
                <div className="about__img-wrapper">
                    <img src={aboutImg} alt="" className="about__image" />
                </div>
                <div className="about__content">
                    <h2 className="section__title title-left" data-title='About Us'>
                        Fresh Quality And Organic Tasty Coffe House For You
                    </h2>
                    <p className="about__description">
                        There ara many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                        in some form, by injected humour, or randomised words which don't habe look even slightly believable.
                    </p>
                    <div className="about__details grid">
                        <p className="about__details-description">
                            <FiCheck />
                            At vero eos et accusamus et iusto odio
                        </p>
                        <p className="about__details-description">
                            <FiCheck />
                            Established fact that a reader will be distracted
                        </p>
                        <p className="about__details-description">
                            <FiCheck />
                            Sed ut perspiciatis unde omnis iste natus sit
                        </p>
                    </div>

                    <a href="#team" className="btn">Our Experts</a>
                </div>
            </div>
        </section>
    )
}

export default About