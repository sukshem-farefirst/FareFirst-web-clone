import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import Calender from "./Calender";
import "../css/search.css";

function Search({ initialFrom = "", initialTo = "", initialDate = null }) {
  const navigate = useNavigate();

  const plane1 = <i className="fa-solid fa-plane-departure"></i>;
  const plane2 = <i className="fa-solid fa-plane-arrival"></i>;

  const [from, setFrom] = useState(initialFrom);
  const [to, setTo] = useState(initialTo);
  const [date, setDate] = useState(initialDate);

  useEffect(() => {
    setFrom(initialFrom);
    setTo(initialTo);
    setDate(initialDate);
  }, [initialFrom, initialTo, initialDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/result", {
      state: { from, to, date },
    });
  };

  return (
    <div className="search-main">
      <div className="search-container">
        <form className="search-form" onSubmit={handleSubmit}>
          <Input
            img={plane1}
            className="input-field"
            name="from"
            value={from}
            onChange={setFrom}
            placeholder="Bengaluru (BLR)"
          />

          <Input
            img={plane2}
            className="input-field"
            name="to"
            value={to}
            onChange={setTo}
            placeholder="Flying to ?"
          />

          <Calender
            selected={date}
            onChange={setDate}
          />

          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
