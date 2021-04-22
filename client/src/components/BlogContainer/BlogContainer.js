import React from 'react';

import './BlogContainer.css';
import BlogItem from './Blogitem/BlogItem';
import ClipLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/core';

const BlogContainer = ({ blogData, loading }) => {
  const blogs = [...blogData];
  const override = css`
    margin: 0 auto;
  `;

  if (blogs.length > 0 && loading === false) {
    return (
      <div className="blog__container">
        {blogs.map((blog) => (
          <BlogItem name={blog.blogName} link={blog.blogUrl}></BlogItem>
        ))}
      </div>
    );
  } else if (blogs.length >= 0 && loading === true) {
    return (
      <div className="blog__container">
        <ClipLoader css={override} size={150} />
      </div>
    );
  } else {
    return null;
  }
};

export default BlogContainer;
