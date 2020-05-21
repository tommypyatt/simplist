import React from 'react';

const FrontListItem = ({ name, id, addById, removeById }) => (
  <li className='list__item'>
    <label className='list__label'>
      <span className='list__item-text'>{ name }</span>
    </label>
    <button className='list__add' onClick={() => { addById(id) }}>Add</button>
    <button className='list__remove' onClick={() => { removeById(id) }}>Remove</button>
  </li>
);

export default FrontListItem;
