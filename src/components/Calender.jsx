import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/calender.css";
import { format, parseISO } from "date-fns";

function Calender({ onChange, selected }) {
  const today = new Date();

  const initialDate = selected ? parseISO(selected) : null;

  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [placeholder, setPlaceholder] = useState(format(today, "dd-MM-yyyy"));

  useEffect(() => {
    if (initialDate) {
      setSelectedDate(initialDate);
      setPlaceholder(format(initialDate, "dd-MM-yyyy"));
    }
  }, [selected]);

  function handleDate(date) {
    if (!date) return;

    setSelectedDate(date);

    const passFormat = format(date, "yyyy-MM-dd");   
    const displayFormat = format(date, "dd-MM-yyyy"); 

    setPlaceholder(displayFormat);

    if (onChange) {
      onChange(passFormat);
    }
  }

  return (
    <div className="calendar-wrapper">
      <i className="fa-solid fa-calendar calendar-icon"></i>

      <DatePicker
        className="custom-datepicker"
        selected={selectedDate}
        onChange={handleDate}
        placeholderText={placeholder}
        dateFormat="dd-MM-yyyy"
      />
    </div>
  );
}

export default Calender;
