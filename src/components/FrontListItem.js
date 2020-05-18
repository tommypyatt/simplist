import React from 'react';

const FrontListItem = ({ name, id, crossedOut, removeById, setCheckedById }) => (
  <li>
    <label>
      <input type='checkbox' defaultChecked={crossedOut} onChange={(e) => {
        setCheckedById({
          id,
          checked: e.target.checked
        });
      }} />
      { name }
    </label>
    <button onClick={() => { removeById(id) }}>Remove</button>
  </li>
);

export default FrontListItem;
