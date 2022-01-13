import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';

// imported components
import Header from '../../components/Header';
import FormSearch from '../../components/FormSearch';
import Loading from '../../components/Loading';
import CardAlbum from '../../components/CardAlbum';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      results: [],
      message: '',
      isFormVisible: true,
    };
  }

  getAlbums = (search) => {
    this.setState({ isFormVisible: false }, () => this.handleFetch(search));
  }

  handleFetch = (search) => {
    searchAlbumsAPI(search).then((response) => {
      const message = response.length > 0
        ? `Resultado de álbuns de: ${search}` : 'Nenhum álbum foi encontrado';

      this.setState({
        results: response,
        message,
        isFormVisible: true,
      });
    });
  }

  render() {
    const { results, message, isFormVisible } = this.state;

    return (
      <div data-testid="page-search">
        <Header />

        {isFormVisible ? <FormSearch onSubmit={ this.getAlbums } /> : <Loading />}
        {message}

        {results.map((album) => (
          <Link
            to={ `/album/${album.collectionId}` }
            data-testid={ `link-to-album-${album.collectionId}` }
            key={ album.collectionId }
          >
            <CardAlbum data={ album } />
          </Link>
        ))}

      </div>
    );
  }
}

export default Search;
