import React from 'react';
import { connect } from 'react-redux';
import FrontList from './FrontList';
import AddNewItem from './AddNewItem';
import { addItem, removeById } from '../actions/list';

class Listify extends React.Component {
  constructor(props) {
    super(props);

    this.removeById = this.removeById.bind(this);
  }

  removeById(id) {
    this.props.dispatch(removeById({
      id
    }));
  }

  render() {
    return (
      <div>
        <FrontList list={this.props.list} removeById={this.removeById} />
        <AddNewItem addItem={(value) => {
          this.props.dispatch(addItem({
            name: value
          }))
        }} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list
  }
};

export default connect(mapStateToProps)(Listify);
