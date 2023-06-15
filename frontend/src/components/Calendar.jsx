import React from "react";
import cal from "../../src/cal.svg";

function DateCalendar() {
    const date = new Date();
    const stringDate = date.toDateString();
    return (
        <div className="date-calen">
            <img className="calendar-logo" src={cal} alt="cal"/>
            <h1 className="date-today">{stringDate}</h1>
        </div>
    )

}

export default DateCalendar;

// import {useState} from 'react';
// import Calendar from 'react-calendar'; 
// import '../index.css';
// import 'react-calendar/dist/Calendar.css'


// function DateCalendar() {
//  const [date, setDate] = useState(new Date())



// return (
//  <div className="app">
//    <h1 className="header">React Calendar</h1>
//    <div className="calendar-container">
//      <Calendar onChange={setDate} value={date}/>
//    </div>
//    <div className="text-center">
//       Selected date: {date.toDateString()}
//    </div>
//  </div>
//   )

// }

// export default DateCalendar;
