import React from 'react';
import BlogItem from './BlogItem';
import './style.css';

const ItemList = ({ items }) => {
  return (
    <div className='itemList-wrap'>
      {items.map((i) => (
        <BlogItem blog={i} key={i.id}/>
      ))}
    </div>
  );
};

export default ItemList;