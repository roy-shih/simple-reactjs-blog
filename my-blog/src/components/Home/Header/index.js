import React from 'react';
import './style.css';

const Header = ({title}) => (
  <header className='home-header'>
    <h2>Roy</h2>
    <h1>
      <span>“</span> {title} <span>”</span>
    </h1>
    <p>
      ReactJs Simple Demo <br /> Workshop for LuLab in 2023/02/02
    </p>
  </header>
);

export default Header;