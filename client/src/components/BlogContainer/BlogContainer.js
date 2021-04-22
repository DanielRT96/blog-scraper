import React from 'react';

import './BlogContainer.css';
import BlogItem from './Blogitem/BlogItem';

const BlogContainer = ({ blogData }) => {
  const blogs = [...blogData];
  if (blogs.length > 0) {
    return (
      <div className="blog__container">
        {blogs.map((blog) => (
          <BlogItem name={blog.blogName} link={blog.blogUrl}></BlogItem>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default BlogContainer;
