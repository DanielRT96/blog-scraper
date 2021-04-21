import React from 'react';

import './BlogContainer.css';
import BlogItem from './Blogitem/BlogItem';

const BlogContainer = ({ blogData }) => {
  const blogs = [...blogData];
  console.log(blogs);
  return (
    <div className="blog__container">
      {blogs.map((blog) => (
        <BlogItem name={blog.blogName} link={blog.blogUrl}></BlogItem>
      ))}
    </div>
  );
};

export default BlogContainer;
