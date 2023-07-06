import React from 'react';
import Contact from '../Contact/Contact';
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
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer> 
        </div>
    );
};

export default Home;