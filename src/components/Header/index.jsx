import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/userAPI';

// imported components
import Loading from '../Loading';

class Header extends Component {
  constructor() {
    super();

    this.state = { userName: '' };
  }

  componentDidMount() {
    getUser().then((response) => this.setState({ userName: response.name }));
  }

  render() {
    const { userName } = this.state;
    return (
      !userName ? <Loading /> : (
        <header data-testid="header-component">
          <h2 data-testid="header-user-name">{userName}</h2>

          <nav>
            <Link to="/search" data-testid="link-to-search">Search</Link>
            <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
            <Link to="/profile" data-testid="link-to-profile">Profile</Link>
          </nav>
        </header>
      )
    );
  }
}

export default Header;
