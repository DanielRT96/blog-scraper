import React from 'react';

import './BlogContainer.css';
import BlogItem from './BlogItem/BlogItem';

const BlogContainer = () => {
  return (
    <div className="blog__container">
      <BlogItem></BlogItem>
    </div>
  );
};

export default BlogContainer;
