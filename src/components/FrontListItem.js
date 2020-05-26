import React from 'react';

const FrontListItem = ({ name, id, crossedOut, removeById, setCheckedById }) => (
  <li className='list__item'>
    <label className='list__label'>
      <input className='list__checkbox' type='checkbox' defaultChecked={crossedOut} onChange={(e) => {
        setCheckedById({
          id,
          checked: e.target.checked
        });
      }} />
      <span className='list__item-text'>{ name }</span>
    </label>
    <div className='list__buttons'>
      <button className='list__remove' onClick={() => { removeById(id) }}>Remove</button>
    </div>
  </li>
);

export default FrontListItem;
