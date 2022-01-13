import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MIN_LENGTH_SEARCH } from '../../lib/constants';

class FormSearch extends Component {
  constructor() {
    super();

    this.state = { search: '', isButtonDisabled: true };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      search: value,
      isButtonDisabled: value.length < MIN_LENGTH_SEARCH,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const { search } = this.state;

    onSubmit(search);
    this.setState({ search: '', isButtonDisabled: true });
  }

  render() {
    const { search, isButtonDisabled } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          type="search"
          data-testid="search-artist-input"
          value={ search }
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          data-testid="search-artist-button"
          disabled={ isButtonDisabled }
        >
          Pesquisar
        </button>
      </form>
    );
  }
}

export default FormSearch;

FormSearch.propTypes = {
  handleSubmit: PropTypes.func,
}.isRequired;
