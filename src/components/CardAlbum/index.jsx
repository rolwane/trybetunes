import React, { Component } from 'react';
import propTypes from 'prop-types';

class CardAlbum extends Component {
  render() {
    const { data } = this.props;
    const {
      // artistId,
      artistName,
      // collectionId,
      collectionName,
      // collectionPrice,
      artworkUrl100,
      primaryGenreName,
      // releaseDate,
      // trackCount,
    } = data;

    return (
      <section className="card-album">
        <img src={ artworkUrl100 } alt={ collectionName } />
        <h2 className="collection-name" data-testid="album-name">{collectionName}</h2>
        <h3 className="artist-name" data-testid="artist-name">{artistName}</h3>
        <p className="genre">{primaryGenreName}</p>
      </section>
    );
  }
}

export default CardAlbum;

CardAlbum.propTypes = {
  collectionName: propTypes.string,
  artworkUrl100: propTypes.string,
}.isRequired;
