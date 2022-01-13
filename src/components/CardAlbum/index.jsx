import React, { Component } from 'react';
import propTypes from 'prop-types';

class CardAlbum extends Component {
  render() {
    const { data } = this.props;
    const {
      // artistId,
      // artistName,
      // collectionId,
      collectionName,
      // collectionPrice,
      artworkUrl100,
      // releaseDate,
      // trackCount,
    } = data;

    return (
      <section>
        {collectionName}
        <img src={ artworkUrl100 } alt={ collectionName } />
      </section>
    );
  }
}

export default CardAlbum;

CardAlbum.propTypes = {
  collectionName: propTypes.string,
  artworkUrl100: propTypes.string,
}.isRequired;
