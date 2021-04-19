import React from 'react';
import './App.css';
import InputField from './components/InputField';

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch('/api')
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>{!data ? 'Loading...' : data}</p>
    //   </header>
    // </div>
    <div className="App">
      <h1 className="title">RisingStack blog scraper</h1>
      <InputField></InputField>
    </div>
  );
}

export default App;
