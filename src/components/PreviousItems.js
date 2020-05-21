import React from 'react';
import { connect } from 'react-redux';
import RecentsList from './RecentsList';

class PreviousItems extends React.Component {
  constructor(props) {
    super(props);
  }

  addById(id) {
    console.log('add', id);
  }

  removeById(id) {
    console.log('remove', id);
  }

  render() {
    return (
      <div>
        <p>Here are things that have been added previously</p>
        <RecentsList list={this.props.recentsList} addById={this.addById} removeById={this.removeById} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recentsList: state.recentsList
  }
};

export default connect(mapStateToProps)(PreviousItems);
