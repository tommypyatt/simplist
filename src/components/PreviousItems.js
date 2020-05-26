import React from 'react';
import { connect } from 'react-redux';
import RecentsList from './RecentsList';
import { reAddItem } from '../actions/list';
import { removeRecent } from '../actions/recents-list';
import unaddedRecents from '../selectors/recents-list';

class PreviousItems extends React.Component {
  constructor(props) {
    super(props);

    this.reAddItem = this.reAddItem.bind(this);
    this.removeById = this.removeById.bind(this);
  }

  reAddItem(id, name) {
    this.props.dispatch(reAddItem({
      id,
      name
    }));
  }

  removeById(id) {
    console.log('remove', id);
    this.props.dispatch(removeRecent({
      id
    }));
  }

  render() {
    return (
      <div>
        <h2 className='previous-items__heading'>Previously added items</h2>
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
