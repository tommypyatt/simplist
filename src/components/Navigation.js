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
        <div className={'nav__off-canvas' + (this.state.isOpen ? ' is-open' : '')}>
          <a className='nav__close-link' onClick={this.closeMenu}>Close</a>
          <ul className='nav__list'>
            <li className='nav__item'>
              <Link to='/' className='nav__link' onClick={this.closeMenu}>List</Link>
            </li>
            <li className='nav__item'>
              <Link to='/previous-items' className='nav__link' onClick={this.closeMenu}>Previous Items</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
};

export default Navigation;