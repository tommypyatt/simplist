import React from 'react';
import { connect } from 'react-redux';

const FrontList = (props) => (
  <div>
    <ul>
      {props.list.map((item, index) => (
        <li key={item.key}>{item.name}</li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return {
    list: state.list
  }
};

export default connect(mapStateToProps)(FrontList);
