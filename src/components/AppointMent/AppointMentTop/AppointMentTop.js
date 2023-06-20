import React, { useState } from 'react';
import im1 from '../../images/dog-Routine.jpg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AppointMentTop.css';

const AppointMentTop = ({handleDateChange}) => {
    // const [value, onChange] = useState(new Date());
    return (
        <section style={{height:'600px'}} className="ApopintMentTop row d-flex align-items-center">
            <div className="col-md-4 col-sm-12 col-12 ml-md-5 offset-md-1">
            <h1 className="text-white text-center p-5 mt-1">Appointment</h1>
                <Calendar className="p-2 rounded shadow border-0 brand-bg"
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6 col-sm-12 col-12">
                <img src={im1} className="img-fluid" alt="" />
            </div>
        </section>
    );
};

export default AppointMentTop;