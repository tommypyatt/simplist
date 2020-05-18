import React from 'react';

const FrontListItem = ({ name, id, removeById }) => (
  <li>
    <label>
      <input type='checkbox' onChange={() => {
        console.log('oc');
      }} />
      { name }
    </label>
    <button onClick={() => { removeById(id) }}>Remove</button>
  </li>
);

export default FrontListItem;
