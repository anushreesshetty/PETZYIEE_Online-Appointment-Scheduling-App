import React from 'react';
import FooterDetail from './FooterDetail';
import './Footer.css';

const Footer = () => {
    
    const ourAddress = [
        { name: "Bengaluru-Majestic", link: "https://www.google.com/search?client=firefox-b-d&q=bengaluru+yelahanka+address#" },
        { name: "Bengaluru-yalahanka", link: "//google.com/map" },

    ]
    const services = [
        { name: "Pet-Care", link: "/appointment" },
        { name: "Pet-Boarding", link: "/appointment" },
        { name: "Pet-Grooming", link: "/" },
        { name: "Playdate", link: "/appointment" },
    ]

    return (
        <footer className="footer-area clear-both sm-pe-5">
            <div className="container pt-5">
                <div className="row md-py-5 footer-content">
                    {/* <FooterDetail key={1} menuTitle={"."} menuItems={noNamed} /> */}
                    <FooterDetail key={2} menuTitle="Services" menuItems={services} />
                    <FooterDetail key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="!#"></a></li>
                            <li className="list-inline-item"><a href="!#"></a></li>
                            <li className="list-inline-item"><a href="!#"></a></li>
                        </ul>
                        <div className="md-mt-5 white">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">+2025550295</button>
                        </div>
                    </FooterDetail>
                </div>
                {/* <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;