import React, { Component } from 'react';

// imported components
import Header from '../../components/Header';

class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        Favorites
        <Header />
      </div>
    );
  }
}

export default Favorites;
