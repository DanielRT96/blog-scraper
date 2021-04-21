import React from 'react';

import './BlogItem.css';

const BlogItem = (props) => {
  return <a href={props.link}>{props.name}</a>;
};

export default BlogItem;
