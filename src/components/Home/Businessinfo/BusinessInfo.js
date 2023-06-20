import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import InformationCard from '../../../components/Home/InformationCard/InformationCard';
import React from 'react';

const infosData = [
    {
        title: 'Opening Hours',
        description: 'Store open from 10p.m to 7pm',
        icon: faClock,
        background:"black"
    },
    {
        title: 'Visit Our Location',
        description: 'Peenya, Bengaluru',
        //link: "//google.com/map"
        icon: faMapMarker,
        background: 'black'
    },
    {
        title: 'Call us now',
        description: '6785456778',
        icon: faPhone,
        background: 'black'
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75 infos-card">
                {
                    infosData.map(info => <InformationCard info={info} key={info.title}></InformationCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;