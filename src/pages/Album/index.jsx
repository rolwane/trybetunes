import React, { Component } from 'react';
import propTypes from 'prop-types';
import getMusics from '../../services/musicsAPI';

// imported components
import Header from '../../components/Header';
import CardAlbum from '../../components/CardAlbum';
import MusicCard from '../../components/MusicCard';

class Album extends Component {
  constructor() {
    super();

    this.state = { musics: [] };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;

    getMusics(id).then((response) => {
      this.setState({ musics: response });
    });
  }

  render() {
    const { musics } = this.state;

    return (
      <div data-testid="page-album">
        <Header />
        {
          musics.map((music, index) => {
            if (index === 0) {
              return <CardAlbum key={ music.collectionId } data={ music } />;
            }
            return (
              <MusicCard
                key={ music.trackId }
                data={ music }
              />
            );
          })
        }
      </div>
    );
  }
}

export default Album;

Album.propTypes = {
  match: propTypes.object,
}.isRequired;
