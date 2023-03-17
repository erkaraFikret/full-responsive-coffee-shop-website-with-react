import React from 'react'
import chooseImg from '../../assets/choose.jpg'
import coffeMug from '../../assets/coffee-mug.svg'
import coffeBeans2 from '../../assets/coffee-beans-2.svg'
import coffeBeans3 from '../../assets/coffee-beans-3.svg'
import './choose.css'

const Choose = () => {
    return (
        <section className='choose section'>
            <div className="choose__grid container grid">
                <div className="choose__content">
                    <h2 className="section__title " data-title='Why Choose Us'>
                        Coffero Most Out Of Your Favorite & Tasty Coffe House
                    </h2>
                    <p className="choose_description">
                        There ara many variations of passages of Lorem Ipsum available but the majority
                        have suffered alteration in some form by injected humour or randomised words
                        which don't look even slightly believable.
                    </p>
                    <div className="choose__details grid">
                        <div className="choose__details-item">
                            <div className="choose__details-img-wrapper">
                                <img src={coffeMug} alt="" className="choose_details-img" />
                            </div>
                            <div>
                                <h3 className='choose_details-title'>
                                    Awesome Aroma
                                </h3>
                                <p className="choose_details-description">
                                    There ara many variations of passages of Lorem Ipsum available but the majority
                                    have suffered alteration in some injected
                                </p>
                            </div>
                        </div>
                        <div className="choose__details-item">
                            <div className="choose__details-img-wrapper">
                                <img src={coffeBeans2} alt="" className="choose_details-img" />
                            </div>
                            <div>
                                <h3 className='choose_details-title'>
                                    Pure Grades
                                </h3>
                                <p className="choose_details-description">
                                    There ara many variations of passages of Lorem Ipsum available but the majority
                                    have suffered alteration in some injected
                                </p>
                            </div>
                        </div>
                        <div className="choose__details-item">
                            <div className="choose__details-img-wrapper">
                                <img src={coffeBeans3} alt="" className="choose_details-img" />
                            </div>
                            <div>
                                <h3 className='choose_details-title'>
                                    Healthy Coffe
                                </h3>
                                <p className="choose_details-description">
                                    There ara many variations of passages of Lorem Ipsum available but the majority
                                    have suffered alteration in some injected
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <img src={chooseImg} alt="" className="choose__img" />
            </div>
        </section>
    )
}

export default Choose