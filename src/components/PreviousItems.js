import React from 'react';
import { connect } from 'react-redux';
import RecentsList from './RecentsList';
import { reAddItem } from '../actions/list';
import unaddedRecents from '../selectors/recents-list';

class PreviousItems extends React.Component {
  constructor(props) {
    super(props);

    this.reAddItem = this.reAddItem.bind(this);
  }

  reAddItem(id, name) {
    this.props.dispatch(reAddItem({
      id,
      name
    }));
  }

  removeById(id) {
    console.log('remove', id);
  }

  render() {
    return (
      <div>
        <p>Here are things that have been added previously</p>
        <RecentsList list={unaddedRecents(this.props.list, this.props.recentsList)} reAddItem={this.reAddItem} removeById={this.removeById} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recentsList: state.recentsList,
    list: state.list
  }
};

export default connect(mapStateToProps)(PreviousItems);
