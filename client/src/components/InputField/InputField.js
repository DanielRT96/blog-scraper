import React, { useState } from 'react';
import axios from 'axios';
import './InputField.css';

const InputField = () => {
  const [userInput, setInput] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const onClick = () => {
    axios.post(`http://localhost:3001/scrape`, { userInput }).then((res) => {
      console.log(res.data); // Here get back
    });
  };

  return (
    <div className="search__container">
      <input
        type="text"
        className="search__input"
        placeholder="Enter the amount of pages to be scraped"
        onChange={handleChange}
      ></input>
      <button className="search__button" type="submit" onClick={onClick}>
        Scrape
      </button>
    </div>
  );
};

export default InputField;
