import React, { Component } from 'react';
import propTypes from 'prop-types';
import getMusics from '../../services/musicsAPI';
import { getFavoriteSongs } from '../../services/favoriteSongsAPI';

// imported components
import Header from '../../components/Header';
import CardAlbum from '../../components/CardAlbum';
import MusicCard from '../../components/MusicCard';
// import Loading from '../../components/Loading';

class Album extends Component {
  constructor() {
    super();

    this.state = { musics: [], favoriteSongs: [] };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;

    getFavoriteSongs().then((response) => {
      this.setState({ favoriteSongs: response });

      getMusics(id).then((musics) => {
        this.setState({ musics });
      });
    });
  }

  render() {
    const { musics, favoriteSongs } = this.state;

    return (
      <div data-testid="page-album">
        <Header />
        {
          musics.map((music, index) => {
            if (index === 0) {
              return <CardAlbum key={ music.collectionId } data={ music } />;
            }
            if (favoriteSongs.some((favMusic) => favMusic.trackId === music.trackId)) {
              return (
                <MusicCard
                  key={ music.trackId }
                  data={ music }
                  favorite
                  onRemove={ null }
                />
              );
            }

            return (
              <MusicCard
                key={ music.trackId }
                data={ music }
                favorite={ false }
                onRemove={ null }
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
