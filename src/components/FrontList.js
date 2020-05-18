import React from 'react';
import FrontListItem from './FrontListItem';

const FrontList = (props) => (
  <div>
    { props.list.length === 0 && <p>There is nothing</p>}
    { !!props.list.length && (
      <ul>
        {props.list.map((item, index) => (
          <FrontListItem key={item.id} {...item} removeById={props.removeById} setCheckedById={props.setCheckedById} />
        ))}
      </ul>
    )}
  </div>
);

export default FrontList;
