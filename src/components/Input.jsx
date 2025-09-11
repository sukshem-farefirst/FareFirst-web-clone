import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/input.css";

function Input(props) {
  const [term, setTerm] = useState(props.value || ""); 
  const [contents, setContent] = useState([]);
  const [displaydiv, setDisplaydiv] = useState(false);

  useEffect(() => {
    setTerm(props.value || "");
  }, [props.value]);

  const fetchResults = async (query) => {
    try {
      const response = await axios.get("https://autocomplete.farefirst.com/places2", {
        params: { term: query, types: "airport", locale: "en", max: 7 },
      });
      setContent(response.data);
    } catch (err) {
      setContent([]);
    }
  };

  function setInput(index) {
    if (contents[index]) {
      const val = `${contents[index].name} (${contents[index].code})`;
      setTerm(val);

      props.onChange(contents[index].name);

      setDisplaydiv(false);
    }
  }

  function handleChange(event) {
    const value = event.target.value;
    setTerm(value);

    props.onChange(value);

    if (value.length > 0) {
      fetchResults(value);
      setDisplaydiv(true);
    } 
    else {
      setDisplaydiv(false);
      setContent([]);
    }
  }

  return (
    <div
      className="inputdiv"
      style={{
        color: "black",
        position: "relative",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        padding: "2px",
        borderRadius: "5px",
      }}
    >
      {props.img}
      <div>
        <input
          value={term}
          name={props.name}
          className={props.className}
          type={props.type || "text"}
          placeholder={props.placeholder}
          onChange={handleChange}
        />
        <div
          className="refernce"
          style={{ display: displaydiv ? "block" : "none" }}
        >
          {contents.map((content, index) => (
            <div
              key={index}
              onClick={() => setInput(index)}
              className="suggestionitem"
            >
              <div className="suggestioncode">{content.code}</div>
              <div>{content.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Input;
