import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField/InputField';
import BlogContainer from './components/BlogContainer/BlogContainer';

function App() {
  const [blogData, setBlogData] = useState('');
  const [loading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <h1 className="title">Scrape it.</h1>
      <InputField
        setBlogData={setBlogData}
        setIsLoading={setIsLoading}
      ></InputField>
      <BlogContainer blogData={blogData} loading={loading}></BlogContainer>
    </div>
  );
}

export default App;
