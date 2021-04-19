import './InputField.css';

function InputField() {
  return (
    <div className="search__container">
      <input
        type="text"
        className="search__input"
        placeholder="Enter the amount of pages to be scraped"
      ></input>
      <button className="search__button" type="submit">
        Scrape
      </button>
    </div>
  );
}

export default InputField;
