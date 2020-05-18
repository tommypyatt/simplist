import React from 'react';

const FrontListItem = ({ name, id, removeById }) => (
  <li>
    <label>
      <input type='checkbox' />
      { name }
    </label>
    <button onClick={() => { removeById({
      id
    }); }}>Remove</button>
  </li>
);

export default FrontListItem;
