import React, { Component } from 'react';
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
      <header data-testid="header-component">
        {
          userName ? <h2 data-testid="header-user-name">{userName}</h2> : <Loading />
        }
      </header>
    );
  }
}

export default Header;
