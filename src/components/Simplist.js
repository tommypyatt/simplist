import React from 'react';
import { connect } from 'react-redux';
import FrontList from './FrontList';
import AddNewItem from './AddNewItem';
import { addItem, removeById, setCheckedById, clear } from '../actions/list';

class Simplist extends React.Component {
  constructor(props) {
    super(props);

    this.removeById = this.removeById.bind(this);
    this.setCheckedById = this.setCheckedById.bind(this);
    this.addItem = this.addItem.bind(this);
    this.clearFrontList = this.clearFrontList.bind(this);
  }

  removeById(id) {
    this.props.dispatch(removeById({
      id
    }));
  }

  setCheckedById(item) {
    this.props.dispatch(setCheckedById({
      id: item.id,
      checked: item.checked
    }));
  }

  addItem(value) {
    this.props.dispatch(addItem({
      name: value
    }))
  }

  clearFrontList() {
    this.props.dispatch(clear());
  }

  render() {
    return (
      <div>
        <FrontList list={this.props.list} removeById={this.removeById} setCheckedById={this.setCheckedById} />
        <AddNewItem addItem={this.addItem} clearFrontList={this.clearFrontList} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list
  }
};

export default connect(mapStateToProps)(Simplist);
