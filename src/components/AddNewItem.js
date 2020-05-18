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
      <div>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.value} onChange={this.onChange} />
          <button>Add Item</button>
        </form>
        { !!this.state.error && <p>Nothing to add</p>}
      </div>
    );
  }
}

export default AddNewItem;
