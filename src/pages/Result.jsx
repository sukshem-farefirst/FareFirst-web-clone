import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Search from "../components/Search";
import axios from "axios";
import "../css/result.css";
import { format } from "date-fns";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const plane_dep_image = <i className="fa-solid fa-plane-departure"></i>;
  const { from, to, date } = location.state || {};
  const showdate=format(date,"EEE, dd-MMM")

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expandKey, setExpandKey] = useState(null);

  const handleBookNow = (e) => {
    e.preventDefault();
    navigate("/thankyou");
  };

  useEffect(() => {
    if (!from || !to || !date) return;

    async function getData() {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://funapiproxy-4mqabsrzhq-uc.a.run.app/flights",
          {
            params: { key: 1, from, to, departureDate: date, client: "bixby", locale: "IN" },
          }
        );

        setTimeout(() => {
          const results = Array.isArray(res.data.results)
            ? res.data.results
            : Array.isArray(res.data)
            ? res.data
            : [];
          setData(results);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    getData();
  }, [from, to, date]);

  const toggleExpand = (index) => {
    setExpandKey(expandKey === index ? null : index);
  };

  return (
    <div style={{ backgroundColor: "#ccced01a" }}>
      <Header />
      <Search initialFrom={from} initialTo={to} initialDate={date} />

      <div className="resultmain">
        {loading && <p style={{ textAlign: "center" }}>Loading results...</p>}
        {!loading && error && <p style={{ textAlign: "center" }}>Error in fetching results...</p>}
        {!loading && !data.length && <p style={{ textAlign: "center" }}>No results found...</p>}

        {!loading &&
          data
            .filter(
              (flight) =>
                flight?.price?.amount &&
                flight?.from?.airlineLogoUrl &&
                flight?.from?.iata &&
                flight?.to?.iata
            )
            .map((flight, index) => {
              const isExpanded = expandKey === index;
              return (
                <div className="result-main-div" key={index}>

                  <div className="resultdiv">
                    <div className="airline">
                      <div>
                        {flight.from.airlineLogoUrl && (
                          <img src={flight.from.airlineLogoUrl} alt="airline logo" />
                        )}
                      </div>
                      <div>
                        <p className="route">{flight.from.iata} – {flight.to.iata}</p>
                        <p className="airline-name">{flight.gate.name}</p>
                      </div>
                    </div>

                    <div className="time-duration">
                      <p className="time">{flight.from.time} – {flight.to.time}</p>
                      <p className="duration">{flight.total_duration?.h}h {flight.total_duration?.m}m</p>
                    </div>

                    <div className="direct">Direct</div>

                    <div className="price">
                      <p>₹{Number(flight.price.amount).toLocaleString("en")}</p>
                      <button className="book-btn" onClick={handleBookNow}>Book Now</button>
                    </div>
                  </div>

                  {/* Expanded details */}
                  {isExpanded && (
                    <div>
                      <div className="expanded-details">
                        <div>{showdate}</div>
                        <div>
                          {flight.from.airlineLogoUrl && (
                            <img src={flight.from.airlineLogoUrl} alt="airline logo" />
                          )}
                        </div>
                        <div>
                          <p>{flight.from.time} – {flight.to.time}</p>
                          <p>{flight.from.info?.city} – {flight.to.info?.city}</p>
                          <p>{flight.from.info?.name} – {flight.to.info?.name}</p>
                          <p>{flight.gate.name}</p>
                        </div>
                        <div className="details-extra">
                          <p>{flight.total_duration?.h}h {flight.total_duration?.m}m</p>
                          <p>Stops: {flight.totalStops}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="expand-toggle" onClick={() => toggleExpand(index)}>
                    <i className={`fa-solid fa-caret-${isExpanded ? "up" : "down"}`}></i> 
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Result;
