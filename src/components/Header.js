import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Header = () => (
  <div className='header'>
    <div className='header__top'>
      <Link to='/'>
        <h1 className='header__title'>Simplist.</h1>
      </Link>
    </div>
    <Navigation />
  </div>
);

export default Header;
