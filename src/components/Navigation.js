import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggleIsOpen = this.toggleIsOpen.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  toggleIsOpen() {
    this.setState((state, props) => {
      return {
        isOpen: !state.isOpen
      }
    });
  }

  closeMenu() {
    this.setState((state, props) => {
      return {
        isOpen: false
      }
    });
  }

  render() {
    return (
      <div className={'nav' + (this.state.isOpen ? ' is-open' : '')}>
        <div className='nav__open'>
          <a className='nav__open-link' onClick={ this.toggleIsOpen }>Open navigation</a>
        </div>
        <ul className={'nav__list' + (this.state.isOpen ? ' is-open' : '')}>
          <li className='nav__item'>
            <Link to='/' onClick={this.closeMenu}>List</Link>
          </li>
          <li className='nav__item'>
            <Link to='/previous-items' onClick={this.closeMenu}>Previous Items</Link>
          </li>
        </ul>
      </div>
    )
  }
};

export default Navigation;