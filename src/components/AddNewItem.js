import React from 'react';

class AddNewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      error: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onError = this.onError.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    const value = e.target.value;

    this.setState((state, props) => {
      return {
        value,
        error: false
      };
    });
  }

  onSubmit(e) {
    e.preventDefault();

    if (!this.state.value) {
      this.onError();
      return;
    }

    this.props.addItem(this.state.value);
    this.reset();
  }

  onError() {
    this.setState((state, props) => {
      return {
        error: true
      }
    });
  }

  reset() {
    this.setState((state, props) => ( {value: '' }));
  }

  render() {
    return (
      <div className='add-new'>
        <form onSubmit={this.onSubmit}>
          <div className='add-new__input-wrap'>
            <input className='add-new__input' value={this.state.value} placeholder='Type here to add new' onChange={this.onChange} />
          </div>
          { !!this.state.error && <p className='add-new__error'>Type above to add an item</p>}
          <button className='add-new__button'>Add Item</button>
          <button className='add-new__button' type='button' onClick={this.props.clearFrontList}>Clear</button>
        </form>
      </div>
    );
  }
}

export default AddNewItem;
