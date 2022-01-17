import React, { Component } from 'react';

// imported components
import Header from '../../components/Header';

class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Header active="favorites" />
        Favorites
      </div>
    );
  }
}

export default Favorites;
