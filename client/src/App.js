import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField/InputField';
import BlogContainer from './components/BlogContainer/BlogContainer';

function App() {
  const [blogData, setBlogData] = useState('');
  return (
    <div className="App">
      <h1 className="title">Scrape it.</h1>
      <InputField setBlogData={setBlogData}></InputField>
      <BlogContainer blogData={blogData}></BlogContainer>
    </div>
  );
}

export default App;
