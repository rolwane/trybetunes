import React, { Component } from 'react';

// imported components
import Header from '../../components/Header';
import FormSearch from '../../components/FormSearch';

class Search extends Component {
  render() {
    return (
      <div data-testid="page-search">
        <Header />
        <FormSearch />
      </div>
    );
  }
}

export default Search;
