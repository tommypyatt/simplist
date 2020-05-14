import React from 'react';
import { Link } from 'react-router-dom';

const NoRoute = () => (
  <div>
    <p>Not found <Link to="/">go home</Link></p>
  </div>
);

export default NoRoute;
