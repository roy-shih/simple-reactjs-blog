import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { data } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './style.css';
import { Link } from 'react-router-dom';

const Item = ({data}) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    let item = data.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, []);

  return (
    <>
      <Link className='item-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {item ? (
        <div className='item-wrap'>
          <header>
            <p className='item-date'>Published {item.createdAt}</p>
            <h1>{item.title}</h1>
            <div className='item-subCategory'>
              {item.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={item.cover} alt='cover' />
          <p className='item-desc'>{item.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Item;