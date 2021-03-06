import React from 'react';
import FrontListItem from './FrontListItem';

const FrontList = (props) => {
  return <div className='list front-list'>
    { props.list.length === 0 && <p className='list__empty-message'>This list is currently empty, add an item to begin.</p>}
    { !!props.list.length && (
      <div>
        <p className='list__empty-message'>Touch to check/uncheck</p>
        <ul className='list__list'>
          {props.list.map((item, index) => (
            <FrontListItem key={item.id} {...item} removeById={props.removeById} setCheckedById={props.setCheckedById} />
          ))}
        </ul>
      </div>
    )}
  </div>
};

export default FrontList;
