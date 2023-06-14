import React from "react";
import DateCalendar from './Calendar';


function Header() {
  return (
    <header>
      <h1>Your Daily Planner</h1>
      <DateCalendar />
    </header>
  );
}

export default Header;