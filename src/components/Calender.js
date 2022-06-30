import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const Calender = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className='container'>
            <div className="p-5 m-5">
            <Calendar onChange={onChange} value={value} />
            </div>
           
        </div>
    );
};

export default Calender;