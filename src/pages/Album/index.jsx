import React, { Component } from 'react';

// imported components
import Header from '../../components/Header';

class Album extends Component {
  render() {
    return (
      <div data-testid="page-album">
        Album
        <Header />
      </div>
    );
  }
}

export default Album;
