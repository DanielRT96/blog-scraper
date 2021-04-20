import React from 'react';
import './App.css';
import InputField from './components/InputField/InputField';
import BlogContainer from './components/BlogContainer/BlogContainer';

function App() {
  return (
    <div className="App">
      <h1 className="title">Scrape it.</h1>
      <InputField></InputField>
      <BlogContainer></BlogContainer>
    </div>
  );
}

export default App;
