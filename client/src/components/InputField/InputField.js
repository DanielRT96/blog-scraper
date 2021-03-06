import React, { useState } from 'react';
import axios from 'axios';
import './InputField.css';

const InputField = ({ setBlogData, setIsLoading }) => {
  const [userInput, setInput] = useState(null);

  const handleChange = (e) => {
    const re = /^[0-9\b]+$/;

    if (e.target.value === '' || re.test(e.target.value)) {
      setInput(e.target.value);
    }
  };

  const onClick = async () => {
    setBlogData([]);
    setIsLoading(true);
    await axios
      .post(`http://localhost:3001/scrape`, { numberOfPages: userInput })
      .then((res) => {
        setBlogData(res.data);
      });
    setIsLoading(false);
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
