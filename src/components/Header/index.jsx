import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { getUser } from '../../services/userAPI';

import './styles.css';
import logo from '../../images/logo-w.png';

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
    const { active } = this.props;
    const MENU_ACTIVE = 'menu-active';

    return (
      !userName ? <Loading /> : (
        <header data-testid="header-component" className="header">

          <section className="header-content">
            <img src={ logo } alt="trybetunes-logo" className="logo-header" />

            <section className="profile">
              <div className="img-profile" />
              <span data-testid="header-user-name" className="user-name">{userName}</span>
            </section>
          </section>

          <nav className="menu">
            <Link
              to="/search"
              data-testid="link-to-search"
              className={ `menu-link ${active === 'search' && MENU_ACTIVE}` }
            >
              Search
            </Link>

            <Link
              to="/favorites"
              data-testid="link-to-favorites"
              className={ `menu-link ${active === 'favorites' && MENU_ACTIVE}` }
            >
              Favorites
            </Link>

            <Link
              to="/profile"
              data-testid="link-to-profile"
              className={ `menu-link ${active === 'profile' && MENU_ACTIVE}` }
            >
              Profile
            </Link>
          </nav>
        </header>
      )
    );
  }
}

export default Header;

Header.propTypes = {
  active: propTypes.string,
}.isRequired;
