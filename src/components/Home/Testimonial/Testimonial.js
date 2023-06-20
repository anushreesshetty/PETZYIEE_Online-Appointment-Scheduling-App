import React from 'react';
import ema from '../../../images/ema.png';
import john from '../../../images/john.png';
import watson from '../../../images/watson.png';
import TestimonialDetails from './TestimonialDetails';
import image from '../../../images/message.png';
import './Testimonial.css';
import useFetch from '../../hooks/useFetch';

const Testimonial = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const { data, loading, error } = useFetch(`${baseUrl}/auth/reviews`);
    return (
        <section className="container testimonial my-5 py-5" id="reviewsContaints">
            <div className="cointainer">
                <div className="section-header py-5">
                    <h5 className="brand-color text-uppercase">Review</h5>
                    <h1>What Our Community <br /> Says</h1>
                </div>
                <div className="card-deck ">
                    <div className="d-flex justify-content-center ">
                        <div className="row w-80 ">
                            
                            <div className="col-md-4 col-sm-6 col-12 text-center review-section">
                            <div className="card shadow-lg">
                
                                <div className="card-body">
                                    <img className="qute-img" src={image} alt="" />
                                    <p className="card-text text-center text-color text-black"> Doggie do right heaven! Clear patient direction. Excellent communication (both text and email reminders) as well as thoughtful details done (bottled water for doggie owners for a quick grab and go, pet and people friendly restrooms are just a couple that come to mind). The staff here has a mind of how can we help you and your four legged buddy reach your best selves as a duo?!!</p>
                                </div>
                                <div className="cart-footer d-flex align-items-center mb-4 justify-content-center">
                                    {/* <img src={img} alt="" className="footer-img me-3" /> */}
                                    <div>
                                        <h6 className="text-primary testName">Dishank</h6>
                                        <p className="">Shivamogaa</p>
                                    </div>
                                </div>
                                
                            </div>
                            </div>
                            

                            <div className="col-md-4 col-sm-6 col-12 text-center review-section">
                            <div className="card shadow-lg">
                
                                <div className="card-body">
                                    <img className="qute-img" src={image} alt="" />
                                    <p className="card-text text-center text-color text-black"> "Services are good . Trainers are so well-behaved.The whole environment is good. I highly recommend petzyie for your pet. They look healthy."</p>
                                </div>
                                <div className="cart-footer d-flex align-items-center mb-4 justify-content-center">
                                    {/* <img src={img} alt="" className="footer-img me-3" /> */}
                                    <div>
                                        <h6 className="text-primary testName">Mandira Shetty</h6>
                                        <p className>Mangaluru</p>
                                    </div>
                                </div>
                                </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-12 text-center review-section">
                            <div className="card shadow-lg">
                
                                <div className="card-body">
                                    <img className="qute-img" src={image} alt="" />
                                    <p className="card-text text-center text-color text-black"> "Love the staff they made my little one feel so comfortable!! Will always continue to come here."</p>
                                </div>
                                <div className="cart-footer d-flex align-items-center mb-4 justify-content-center">
                                    {/* <img src={img} alt="" className="footer-img me-3" /> */}
                                    <div>
                                        <h6 className="text-primary testName">Srishti</h6>
                                        <p className="">Bengaluru</p>
                                    </div>
                                </div>
                                </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;