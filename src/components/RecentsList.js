import React from 'react';
import RecentsListItem from './RecentsListItem';

const RecentsList = (props) => {
  return <div className='list recents-list'>
    { props.list.length === 0 && <p className='list__empty-message'>This list is currently empty. Items that you remove from the main list will appear here, so you can add them again.</p>}
    { !!props.list.length && (
      <ul className='list__list'>
        {props.list.map((item, index) => (
          <RecentsListItem key={item.id} {...item} removeById={props.removeById} reAddItem={props.reAddItem} />
        ))}
      </ul>
    )}
  </div>
};

export default RecentsList;
