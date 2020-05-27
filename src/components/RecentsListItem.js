import React from 'react';

const FrontListItem = ({ name, id, reAddItem, removeById }) => (
  <li className='list__item'>
    <label className='list__label' onClick={() => { reAddItem(id, name) }}>
      <span className='list__item-text'>{ name }</span>
    </label>
    <div className='list__buttons'>
      <button className='list__forget' onClick={() => { removeById(id) }}>Forget</button>
    </div>
  </li>
);

export default FrontListItem;
