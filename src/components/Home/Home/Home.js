import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctor from '../Doctor/Doctor';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import {Services} from '../Services/Services';
import {OtherServices} from '../Services/OtherServices'
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <OtherServices></OtherServices>
            {/* <Appointment></Appointment> */}
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer> 
        </div>
    );
};

export default Home;